function toggleGameButton() {
  let buttonElement = document.querySelector('.js-game-button');
  if (!buttonElement.classList.contains('is-toggle')) {
      buttonElement.classList.add('is-toggle')
  } else {
     buttonElement.classList.remove('is-toggle')
  }
}

function toggleMusicButton() {
  let buttonElement = document.querySelector('.js-music-button');
  if (!buttonElement.classList.contains('is-toggle')) {
      buttonElement.classList.add('is-toggle')
  } else {
     buttonElement.classList.remove('is-toggle')
  }
}

function toggleTechButton() {
  let buttonElement = document.querySelector('.js-tech-button');
  if (!buttonElement.classList.contains('is-toggle')) {
      buttonElement.classList.add('is-toggle')
  } else {
     buttonElement.classList.remove('is-toggle')
  }
}