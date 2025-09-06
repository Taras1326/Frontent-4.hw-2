
//                Завдання 1

// Створіть слайдер на сторінці, який показує зображення. 
// При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення.
// Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.

const sliderInput = document.querySelector('.slider__input');
  const sliderImage = document.querySelector('.slider__image');

  const updateImageSize = _.debounce((value) => {
    sliderImage.style.width = `${value * 3}px`; 
  }, 100);

  sliderInput.addEventListener('input', (event) => {
    updateImageSize(event.target.value);
  });



//                  завдання 2

// Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. 
// Рішення: використовуйте метод debounce з бібліотеки lodash. 
// Встановіть час затримки в мілісекундах, наприклад 100мс, 
// і передайте функцію, яка буде виконуватися при переміщенні мишкою.

const boxEl = document.getElementById("box");

let isMove = false;
let count = 0;

window.addEventListener("mousedown", (e) => {
  if (e.target === boxEl) {
    isMove = true;
  }
});

window.addEventListener("mousemove", _.throttle(onMouse, 100));

window.addEventListener("mouseup", () => {
  isMove = false;
});

function onMouse(event) {
  if (isMove) {
    const boxWidth = boxEl.offsetWidth;
    const boxHeight = boxEl.offsetHeight;

    const minY = window.innerHeight / 2;
    const maxY = window.innerHeight - boxHeight;
    const maxX = window.innerWidth - boxWidth;

    let x = event.clientX;
    let y = event.clientY;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));

    boxEl.style.left = x + "px";
    boxEl.style.top = y + "px";

    count += 1;
    console.log("Move count:", count);
  }
}



