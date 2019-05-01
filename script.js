// Slider ==========================>

//Задаем глобальные переменные
var number = 1; // Номер слайда (первый не учитывается, тк он стоит при загрузке)
var j = 0; // Предыдущий слайд
var timer; // переменная для таймера
var animateTime = 4000; // Время анимации прокрутки
var timeOut = 2000; // timeOut > animateTime Всегда! (время между слайдами в простое)

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
      // Очистка таймера
      clearTimeout(timer);
      // По факту нужна только для того, чтобы не сломать слайдер во время анимации,
      // Уберает онклик после запуска анимации.
      $('#slider').prop('onclick', null).off('click');
    }
  });
  //Вывод в консоль просто так :)
  console.log('cklick');
  // Очистка и запуск таймера при появлении нового слайда
  timer = setTimeout(slider, timeOut + animateTime);
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


// Blocks Animate=============================>
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

    // console.log(arr[c]);
    // console.log(mas[left]);
    // console.log(i);

  }
}

function realAnimateTop() {
  var a = 0;
  for (var i = 0; i < 3; i++) {
    a++;
    var element = '#number' + a;
    $(element).animate({
      top: '3%',
      opacity: 1
    }, (a + 3) * 600);
  }
}


function realAnimateTopSec() {
  var b = 3;
  for (var i = 3; i < 6; i++) {
    b++;
    element = '#number' + b;
    $(element).animate({
      top: '21%',
      opacity: 1
    }, b * 600);
  }
}

function blocksLoad() {

  $(window).scroll(function () {
    if ($(this).scrollTop() >= $("#me").offset().top) {
      realAnimateTop();
    }
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() >= $("#number1").offset().top + $("#number1").innerHeight() * 0.75) {
      realAnimateTopSec();
    }
  })
}
// ===========================>
function animateDescription() {
  $('#number1').mouseover(function () {
    for (var i = 3; i <= 6; i++) {
      var elemBottom = '#number' + i;
      if ($('#number1').offset().left == $(elemBottom).offset().left) {
        var j = i;
      }
    }
    var elemBottomQ = '#number' + j;
    console.log(elemBottomQ);
    $(elemBottomQ).animate({
      top: '30%',
      opacity: 0.8
    }, {duration: j * 600, complete: function () {
      console.log('asdasd');
    }})
  });
}
