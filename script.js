const openSelect = () => {
  const selectClass = document.querySelector('.wrapper-select select');
  const arrowSvg = document.querySelector('.wrapper-select svg');
  selectClass.addEventListener('click', () => {
    arrowSvg.style.transform = 'rotate(180deg)'
  })

  selectClass.addEventListener('mouseout', () => {
    arrowSvg.style.transform = 'rotate(0deg)'
  })
}
openSelect();


const showMoreTheme = () => {
  const showTheme = document.querySelector('.show-more-theme');
  const collectionBtnTheme = document.querySelectorAll('.wrapper-btn-theme button');

  showTheme.addEventListener('click', () => {
    collectionBtnTheme.forEach(el => {
      el.classList.add('active')
    })
  })
}
showMoreTheme();


const scoreLetterInput = () => {
  const score = document.querySelector('.score-letter b');
  const inputMessage = document.querySelector('.message');

  inputMessage.addEventListener('keyup', (event) => {
    score.innerHTML = event.target.selectionEnd;
  })
}
scoreLetterInput();


const clearInputTheme = () => {
  const clear = document.querySelector('.clear-input');
  const firstInput = document.querySelector('.input-first');

  firstInput.addEventListener('keyup', () => {
    if (firstInput.value === '') {
      clear.classList.remove('active');
    } else {
      clear.classList.add('active');
    }
  })

  clear.addEventListener('click', () => {
    firstInput.value = '';
    clear.classList.remove('active');
  })

};
clearInputTheme();