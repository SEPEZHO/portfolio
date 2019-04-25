//Задаем глобальные переменные
var number = 1; // Номер слайда (первый не учитывается, тк он стоит при загрузке)
var j = 0; // Предыдущий слайд
var timer; // переменная для таймера
var animateTime = 3000; // Время анимации прокрутки
var timeOut = 10000; // timeOut > animateTime Всегда! (время между слайдами в простое)

function slider() {
  //Обновление слайдера после полной прокрутки
  if (number >= 4) {
    number = 0;
  }
  number++;
  // Анимация текущего слайда на выход
  $("#slide" + number).animate({
    left: '0%'
  }, animateTime);
  // присвоение J`ю предыдущего слайда, а если слайд = 1, то предыдущий будет 4-ым
  if (number == 1) {
    j = 4
  } else {
    j = number - 1;
  }
  //Анимация прошлого слайда
  $("#slide" + j).animate({
    left: '100%',
  }, {
    // Время анимации
    duration: animateTime,
    // Функция ПОСЛЕ выполнения
    complete: function () {
      // Задаем положение '-100%'
      $('#slide' + j).css({
        left: '-100%',
      });
      // Задаем элементу онклик, вызывающий функцию слайдера
      $('#slider').click(slider);
    },
    //Функция при запуске анимации
    start: function () {
      // По факту нужна только для того, чтобы не сломать слайдер во время анимации,
      // Уберает онклик после запуска анимации.
      $('#slider').prop('onclick', null).off('click');
    }
  });
  //Вывод в консоль просто так :)
  console.log('cklick');
  // Очистка и запуск таймера при появлении нового слайда
  clearTimeout(timer);
  timer = setTimeout(slider, timeOut);
}
// Функция, которая запускается в HTML`e, при загрузке страницы:
function begin() {
  //Переключение слайда при нажатии, когда слайдер только загрузился
  $('#slider').click(slider);
  //Установка первого слайда, тк в css они смещены на -100%
  $('#slide' + 1).css({
    left: '0%'
  });
}



// =============================>
var leftOld;
var leftOldPlus;
var mas = ['7.5%', '37.5%', '67.5%'];

function animate() {
  var a = 0;
  var arr = [];
  while (arr.length < 3) {
    var randomnumber = Math.floor(Math.random() * 3) + 0;
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  for (var i = 0; i < 3; i++) {
    a++;
    var element = '#number' + a;
    left = arr[i];
    $(element).css({
      left: mas[left]
    })
  }
  animateLow();
}

function animateLow() {
  var arr = [];
  while (arr.length < 3) {
    var randomnumber = Math.floor(Math.random() * 3) + 0;
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  var c = 0;
  var b = 3;
  for (var i = 3; i < 6; i++) {
    b++;
    var element = '#number' + b;
    left = arr[i - 3];
    $(element).css({
      left: mas[left]
    })
    console.log(arr[c]);
    console.log(mas[left]);
    console.log(i);

  }
}

function realAnimateTop() {
  var b = 3;
  for (var i = 3; i < 6; i++) {
    b++;
    var element = '#number' + b;
    $(element).animate({
      top: '25%',
      opacity: 1
    }, b * 600);
  }
  var a = 0;
  for (var i = 0; i < 3; i++) {
    a++;
    var element = '#number' + a;
    $(element).animate({
      top: '5%',
      opacity: 1
    }, a * 600 * 3);
  }
}

window.onload = animate;
