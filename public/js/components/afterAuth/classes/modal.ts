export default class Modal {
  modalId: string;
  modalContainer: HTMLElement | null;
  content: HTMLElement | null;
  openerButton: HTMLElement | null;
  modalElement: HTMLElement | null;

  constructor(
    modalId: string,
    modalContainer: HTMLElement | null,
    content: HTMLElement | null,
    openerButton: HTMLElement | null
  ) {
    this.modalId = modalId;
    this.content = content;
    this.openerButton = openerButton;
    this.modalContainer = modalContainer;
    this.modalElement = null;
    this.createModal();
  }

  createModal() {
    // Create modal HTML
    const modalHTML = `
      <div class="modal" id="${this.modalId}">
      </div>
    `;

    if (this.modalContainer) {
      this.modalContainer.innerHTML = modalHTML;

      this.modalElement = document.getElementById(this.modalId);
      if (this.content) this.modalElement?.appendChild(this.content);

      if (this.modalElement) {
        const closeButton = this.modalElement.querySelector(
          ".close"
        ) as HTMLElement;

        if (closeButton) {
          closeButton.onclick = () => {
            this.close();
          };
        }

        if (this.openerButton) {
          this.openerButton.onclick = () => {
            this.open();
          };
        }

        // Close modal when clicking outside the content
        window.onclick = (event: MouseEvent) => {
          if (event.target === this.modalElement) {
            this.close();
          }
        };
      }
    }
  }

  open() {
    if (this.modalElement) {
      this.modalElement.style.display = "block";
    }
  }

  close() {
    if (this.modalElement) {
      this.modalElement.style.display = "none";
    }
  }
}
