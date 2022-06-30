const buttonModal = document.querySelector('#openModal')
const modal = document.querySelector('.modal-wrapper')

document.addEventListener('keydown', exitModal);
buttonModal.addEventListener('click', openModal);

function openModal() {
  modal.classList.remove('invisible');
}

function exitModal(e) {
  const isEscKey = e.key === 'Escape';
  const isModalVisible = modal.classList.contains('invisible');
  if (!isModalVisible && isEscKey) {
    modal.classList.add('invisible');
    console.log('disparei')
  }
}