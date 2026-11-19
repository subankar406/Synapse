/**
 * Global modal wiring for <Modal> (native <dialog>).
 *  - [data-modal-open="id"] opens #modal-id
 *  - [data-modal-close] closes its dialog
 *  - clicking the backdrop closes the dialog
 * Emits `modal:open` (detail: the dialog) so other widgets can react — the mobile
 * menu closes, and scripts/animations.ts replays the entrance animation.
 */
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  const opener = target.closest<HTMLElement>('[data-modal-open]');
  if (opener?.dataset.modalOpen) {
    const dialog = document.getElementById(`modal-${opener.dataset.modalOpen}`);
    if (dialog instanceof HTMLDialogElement) {
      dialog.querySelector('[data-modal-scroll]')?.scrollTo(0, 0);
      dialog.showModal();
      document.dispatchEvent(new CustomEvent('modal:open', { detail: dialog }));
    }
    return;
  }

  if (target.closest('[data-modal-close]')) {
    target.closest('dialog')?.close();
    return;
  }

  // A click whose target is the <dialog> itself landed on the backdrop.
  if (target instanceof HTMLDialogElement && target.open) {
    target.close();
  }
});

/**
 * Page scroll lock while any <dialog> (bio modal, lightbox, booking…) is open.
 * Wheel, touch and keyboard scrolling are blocked instead of setting
 * `overflow: hidden`, so the page scrollbar stays visible and nothing shifts.
 * Scrolling still works inside a modal's own scroll area ([data-modal-scroll])
 * while it has content to scroll; `overscroll-behavior: contain` there stops
 * it from chaining to the page at the ends.
 */
const openDialog = () => document.querySelector<HTMLDialogElement>('dialog[open]');

function scrollAreaOf(target: EventTarget | null): HTMLElement | null {
  const area = target instanceof Element ? target.closest<HTMLElement>('[data-modal-scroll]') : null;
  return area && area.scrollHeight > area.clientHeight ? area : null;
}

const blockScroll = (event: Event) => {
  if (openDialog() && !scrollAreaOf(event.target)) event.preventDefault();
};

document.addEventListener('wheel', blockScroll, { passive: false });
document.addEventListener('touchmove', blockScroll, { passive: false });

const SCROLL_KEYS = new Set([' ', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown']);
document.addEventListener('keydown', (event) => {
  if (!SCROLL_KEYS.has(event.key) || !openDialog()) return;
  const target = event.target as HTMLElement;
  // Let keys do their job in form fields and on buttons (Space activates them).
  if (target.closest('input, textarea, select, button, a, [contenteditable]')) return;
  if (!scrollAreaOf(target) && !scrollAreaOf(document.activeElement)) event.preventDefault();
});
