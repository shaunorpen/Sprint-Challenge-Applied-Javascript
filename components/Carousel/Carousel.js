/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel () {
  const divCarousel = document.createElement('div');
  const divLeftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const divRightButton = document.createElement('div');

  divCarousel.classList.add('carousel');
  divLeftButton.classList.add('left-button');
  divRightButton.classList.add('right-button');

  divLeftButton.textContent = ' < ';
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';
  divRightButton.textContent = ' > ';

  divCarousel.appendChild(divLeftButton);
  divCarousel.appendChild(img1);
  divCarousel.appendChild(img2);
  divCarousel.appendChild(img3);
  divCarousel.appendChild(img4);
  divCarousel.appendChild(divRightButton);

  return divCarousel;
}

document.querySelector('.carousel-container').appendChild(createCarousel());

document.querySelector('.left-button').addEventListener('click', (e) => {
  document.querySelector('img:first-of-type').style.display = 'block';
  document.querySelector('img:last-of-type').style.display = 'none';
});

document.querySelector('.right-button').addEventListener('click', (e) => {
  document.querySelector('img:first-of-type').style.display = 'none';
  document.querySelector('img:last-of-type').style.display = 'block';
});