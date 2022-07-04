/* Selecting the elements with the id openModal and the class modal-wrapper. */
const buttonModal = document.querySelector('#openModal')
const modal = document.querySelector('.modal-wrapper')

/* Listening for a click on the button and a keydown on the document. */
document.addEventListener('keydown', exitModal);
buttonModal.addEventListener('click', openModal);

/**
 * The function openModal() removes the class invisible from the modal element.
 */
function openModal() {
  modal.classList.remove('invisible');
}

/**
 * If the modal is visible and the escape key is pressed, then hide the modal.
 * @param e - the event object
 */
function exitModal(e) {
  const isEscKey = e.key === 'Escape';
  const isModalVisible = modal.classList.contains('invisible');
  if (!isModalVisible && isEscKey) {
    modal.classList.add('invisible');
    console.log('disparei')
  }
}