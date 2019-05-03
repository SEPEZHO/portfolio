// Slider ==========================>

//Задаем глобальные переменные
var number = 1; // Номер слайда (первый не учитывается, тк он стоит при загрузке)
var j = 0; // Предыдущий слайд
var timer; // переменная для таймера
var animateTime = 3000; // Время анимации прокрутки
var timeOut = 15000; // timeOut > animateTime Всегда! (время между слайдами в простое)

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
      $('#slide' + j).stop([true]);
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
    var descriptionNumber = '#descriptionNumber' + a;

    left = arr[i];
    $(element).css({
      left: mas[left]
    })
    $(descriptionNumber).css({
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
    var descripNum = '#descriptionNumber' + b
    left = arr[i - 3];
    $(element).css({
      left: mas[left]
    })
    $(descripNum).css({
      left: mas[left]
    })
    if (mas[left] == '37.5%') {
      $(element).css({
        zIndex: 0
      })
    }
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
    }, {
      duration: (a + 3) * 200,
      complete: function () {
        animateDescription()
      }
    });
  }
}


function realAnimateTopSec() {
  var b = 3;
  for (var i = 3; i < 6; i++) {
    b++;
    element = '#number' + b;
    $(element).animate({
      top: '20%',
      opacity: 1
    }, b * 200);
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

var numberForAnimateDescription;
var numberForAnimateDescriptionBlock;

function animateDescription() {
  $('.descripNum1').mouseover(function () {
    numberForAnimateDescription = '.descripNum1';
    numberForAnimateDescriptionBlock = '#descriptionNumber1';
    animateDesciptionBegin();
  })
  $('.descripNum1').mouseout(function () {
    numberForAnimateDescription = '.descripNum1';
    numberForAnimateDescriptionBlock = '#descriptionNumber1';

    animateDesciptionEnd();
  })
  $('.descripNum2').mouseover(function () {
    numberForAnimateDescription = '.descripNum2';
    numberForAnimateDescriptionBlock = '#descriptionNumber2';

    animateDesciptionBegin();
  })
  $('.descripNum2').mouseout(function () {
    numberForAnimateDescription = '.descripNum2';
    numberForAnimateDescriptionBlock = '#descriptionNumber2';

    animateDesciptionEnd();
  })
  $('.descripNum3').mouseover(function () {
    numberForAnimateDescription = '.descripNum3';
    numberForAnimateDescriptionBlock = '#descriptionNumber3';

    animateDesciptionBegin();
  })
  $('.descripNum3').mouseout(function () {
    numberForAnimateDescription = '.descripNum3';
    numberForAnimateDescriptionBlock = '#descriptionNumber3';

    animateDesciptionEnd();
  })

  $('.descripNum4').mouseover(function () {
    numberForAnimateDescription = 'describNumb4';
    numberForAnimateDescriptionBlock = '#descriptionNumber4';
    animateDesciptionBeginSec();
  })
  $('.descripNum4').mouseout(function () {
    numberForAnimateDescription = 'describNumb4';
    numberForAnimateDescriptionBlock = '#descriptionNumber4';

    animateDesciptionEndSec();
  })
  $('.descripNum5').mouseover(function () {
    numberForAnimateDescription = 'describNumb5';
    numberForAnimateDescriptionBlock = '#descriptionNumber5';

    animateDesciptionBeginSec();
  })
  $('.descripNum5').mouseout(function () {
    numberForAnimateDescription = 'describNumb5';
    numberForAnimateDescriptionBlock = '#descriptionNumber5';

    animateDesciptionEndSec();
  })
  $('.descripNum6').mouseover(function () {
    numberForAnimateDescription = 'describNumb6';
    numberForAnimateDescriptionBlock = '#descriptionNumber6';

    animateDesciptionBeginSec();
  })
  $('.descripNum6').mouseout(function () {
    numberForAnimateDescription = 'describNumb6';
    numberForAnimateDescriptionBlock = '#descriptionNumber6';

    animateDesciptionEndSec();
  })
}

function animateDesciptionBegin() {

  $(numberForAnimateDescriptionBlock).stop([true]);
  $(numberForAnimateDescriptionBlock).animate({
    height: '11.5%',
  }, 400)

  for (var i = 4; i <= 6; i++) {
    var elemBottom = '#number' + i;
    if ($(numberForAnimateDescription).offset().left == $(elemBottom).offset().left) {
      $(elemBottom).stop([true]);
      $(elemBottom).animate({
        top: '30%',
      }, 400)
    }
  }
  $(numberForAnimateDescriptionBlock + 'A').stop([true])
  $(numberForAnimateDescriptionBlock + 'A').animate({
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%'
  }, 400)
}

function animateDesciptionEnd() {

  $(numberForAnimateDescriptionBlock).stop([true]);
  $(numberForAnimateDescriptionBlock).animate({
    height: '0%',
  }, 400)

  for (var i = 4; i <= 6; i++) {
    var elemBottom = '#number' + i;
    if ($(numberForAnimateDescription).offset().left == $(elemBottom).offset().left) {
      $(elemBottom).stop([true]);
      $(elemBottom).animate({
        top: '20%',
        opacity: 1
      }, 400)
    }
  }
  $(numberForAnimateDescriptionBlock+ 'A').stop([true])
  $(numberForAnimateDescriptionBlock+ 'A').animate({
    borderBottomLeftRadius: '8%',
    borderBottomRightRadius: '8%'
  }, 400)

}

function animateDesciptionBeginSec() {

  $(numberForAnimateDescriptionBlock).stop([true]);
  $(numberForAnimateDescriptionBlock).animate({
    height: '11.5%',
  }, 400)
  $('#line-firstOnPage').stop([true])
  $('#line-firstOnPage').animate({
    top: '47%',
  }, 400)
  $('#lineTwo' + numberForAnimateDescription).stop([true])
  $('#lineTwo' + numberForAnimateDescription).animate({
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%'
  }, 400)
}

function animateDesciptionEndSec() {

  $(numberForAnimateDescriptionBlock).stop([true]);
  $(numberForAnimateDescriptionBlock).animate({
    height: '0%',
  }, 400)

  $('#lineTwo' + numberForAnimateDescription).stop([true])
  $('#lineTwo' + numberForAnimateDescription).animate({
    borderBottomLeftRadius: '8%',
    borderBottomRightRadius: '8%'
  }, 400)

  $('#line-firstOnPage').animate({
    top: '40%',
  }, 400)
}
