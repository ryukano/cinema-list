export const changeSelectedButton = (id) => {
   const previusCheckedButton = document.querySelector('.b-selected');
   previusCheckedButton.classList.remove('b-selected');

   const checkedButton = document.getElementById(id);
   checkedButton.classList.add('b-selected');
}
