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
