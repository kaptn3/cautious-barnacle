const change = () => {
  const images = document.querySelectorAll('img');
  if (images[0].classList.contains('hide')) {
    images[0].classList.remove('hide');
    images[1].classList.add('hide');
    console.log('err')
  } else {
    images[1].classList.remove('hide');
    images[0].classList.add('hide');
  }
}