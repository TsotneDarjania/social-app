import Modal from "./classes/modal";

const content = document.getElementById("notificationModalContent");
const modalContainer = document.getElementById("notificationsModalContainer");
const notificationBtn = document.getElementById("notificationBtn");

const notificationModal = new Modal(
  "notification",
  modalContainer,
  content,
  notificationBtn
);

export default notificationModal;
