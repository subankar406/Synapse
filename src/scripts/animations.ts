/**
 * Site-wide entrance animations (GSAP + ScrollTrigger + SplitText).
 *
 * Markup contract — no per-section JS needed:
 *  - [data-split]    heading whose letters stagger in (Heading adds it by default)
 *  - [data-stagger]  container whose direct children fade up one after another
 *  - [data-fade]     single element that fades up
 *  - [data-scroll-reveal]  paragraph whose words brighten from dim to full as you scroll;
 *                          sibling paragraphs reveal one after another
 *  - [data-no-anim]  opt an element out of the automatic fade
 *  Anything else that is a direct child of a section's inner container
 *  ([data-anim-scope]) fades up automatically.
 *
 * Each animation plays when its element reaches 20% from the bottom of the
 * viewport. It only resets once its whole section has left the viewport
 * through the bottom (scrolling back up), reversing smoothly rather than
 * snapping, so it replays the next time the section scrolls into view from
 * below. Modals replay on every open.
 *
 * Widgets that change page height (accordion, "learn more") dispatch
 * `layout:change` so trigger positions are re-measured.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const START = 'top 80%';
/** Section is fully below the viewport once its top passes the bottom edge. */
const SECTION_GONE = 'top bottom';
const REVERSE_SPEED = 1.6;
const FADE = { y: 28, duration: 0.8, ease: 'power3.out' };
const CHARS = { yPercent: 60, duration: 0.6, ease: 'power3.out', stagger: 0.018 };
const STAGGER = 0.08;

const root = document.documentElement;
const reveal = () => root.classList.add('anim-ready');

type Build = () => gsap.core.Tween | gsap.core.Timeline;

/**
 * Play `build()` when `trigger` reaches the start line. Reverse it (smoothly)
 * only when the whole surrounding section has gone back below the viewport.
 */
function onView(trigger: Element, build: Build) {
  const anim = build().pause(0);
  const section = trigger.closest('section, footer') ?? trigger;

  ScrollTrigger.create({
    trigger,
    start: START,
    onEnter: () => anim.timeScale(1).play(),
  });
  ScrollTrigger.create({
    trigger: section,
    start: SECTION_GONE,
    onLeaveBack: () => anim.timeScale(REVERSE_SPEED).reverse(),
  });
}

/**
 * Words go from dim to full opacity, scrubbed by scroll. Sibling paragraphs
 * form one sequence: the next paragraph starts only once the previous one is
 * fully revealed. The sequence runs from the first paragraph reaching the
 * start line until the last one is at 45% of the viewport.
 */
function scrollReveal(group: Element[]) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: group[0],
      start: START,
      endTrigger: group[group.length - 1],
      end: 'bottom 45%',
      scrub: 0.6,
    },
  });
  group.forEach((el) => {
    const words = SplitText.create(el, { type: 'words', wordsClass: 'split-word' }).words;
    // Duration proportional to length, so long paragraphs take more scroll.
    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, ease: 'none', duration: 0.1, stagger: 0.1 });
  });
}

/** Group [data-scroll-reveal] paragraphs by parent, so siblings reveal in sequence. */
function scrollRevealGroups(): Element[][] {
  const groups = new Map<Element, Element[]>();
  document.querySelectorAll('main [data-scroll-reveal]').forEach((el) => {
    const parent = el.parentElement!;
    groups.set(parent, [...(groups.get(parent) ?? []), el]);
  });
  return [...groups.values()];
}

const splits = new WeakMap<Element, SplitText>();
function charsOf(el: Element): Element[] {
  let split = splits.get(el);
  if (!split) {
    split = SplitText.create(el, { type: 'words,chars', wordsClass: 'split-word', charsClass: 'split-char' });
    splits.set(el, split);
  }
  return split.chars;
}

const letters = (el: Element) =>
  gsap.fromTo(
    charsOf(el),
    { opacity: 0, yPercent: CHARS.yPercent },
    { opacity: 1, yPercent: 0, duration: CHARS.duration, ease: CHARS.ease, stagger: CHARS.stagger },
  );

const fadeUp = (targets: Element | Element[], stagger = 0) =>
  gsap.fromTo(targets, { opacity: 0, y: FADE.y }, { opacity: 1, y: 0, duration: FADE.duration, ease: FADE.ease, stagger });

/** Direct children of a scope that should get the automatic fade. */
function autoFadeTargets(scope: Element): Element[] {
  return [...scope.children].filter(
    (el) =>
      !el.matches('[data-split], [data-stagger], [data-fade], [data-scroll-reveal], [data-no-anim], script, style') &&
      !el.querySelector('[data-split], [data-stagger], [data-fade], [data-scroll-reveal]'),
  );
}

function initPage() {
  document.querySelectorAll('main [data-split], footer [data-split]').forEach((el) => onView(el, () => letters(el)));
  scrollRevealGroups().forEach(scrollReveal);

  document.querySelectorAll('main [data-stagger], footer [data-stagger]').forEach((el) => {
    const children = [...el.children];
    if (children.length) onView(el, () => fadeUp(children, STAGGER));
  });

  const singles = [
    ...document.querySelectorAll('main [data-fade], footer [data-fade]'),
    ...[...document.querySelectorAll('[data-anim-scope]')].flatMap(autoFadeTargets),
  ];
  singles.forEach((el) => onView(el, () => fadeUp(el)));
}

/** Modal entrance: letters of its title + staggered fade of its content, replayed on every open. */
function animateModal(dialog: HTMLDialogElement) {
  const tl = gsap.timeline();
  const media = dialog.querySelector('.modal__media');
  const body = dialog.querySelector('.modal__body');
  if (media) tl.add(fadeUp(media), 0);
  if (body) tl.add(fadeUp([...body.children], 0.05), 0.05);
  dialog.querySelectorAll('[data-split]').forEach((el) => tl.add(letters(el), 0.1));
}

const motion = gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)', () => {
  initPage();
  document.addEventListener('modal:open', (e) => animateModal((e as CustomEvent<HTMLDialogElement>).detail));
});

// Fonts and expanding widgets change layout; re-measure trigger positions.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
document.addEventListener('layout:change', () => ScrollTrigger.refresh());
reveal();
