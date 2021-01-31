$(document).ready(function () {
  $('.dws-progress-bar')
    .circularProgress({
      color: '#008496', //цвет прогресс бара
      line_width: 10, //толщина линии прогресс бара
      height: '250px', //высота прогресс бара
      width: '250px', //ширина прогресс бара
      percent: 0,
      // counter_clockwise: true,
      starting_position: 25,
    })
    .circularProgress('animate', 100, 4500); //продолжительность анимации
});

$(window).on('load', function () {
  var $preloader = $('#preloader');
  $preloader.delay(4800).fadeOut('slow'); //до выключения прелоадера
});
