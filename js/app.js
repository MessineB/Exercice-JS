var exos = [
  {id: 'exo1', nav: '#1', title: 'Exo 01'},
  {id: 'exo2', nav: '#2', title: 'Exo 02'},
  {id: 'exo3', nav: '#3', title: 'Exo 03'},
  {id: 'exo4', nav: '#4', title: 'Exo 04'},
  {id: 'exo5', nav: '#5', title: 'Exo 05'},
  {id: 'exo6', nav: '#6', title: 'Exo 06'},
  {id: 'exo7', nav: '#7', title: 'Exo 07'},
  {id: 'exo8', nav: '#8', title: 'Exo 08'},
  {id: 'exo9', nav: '#9', title: 'Exo 09'},
  {id: 'exo10', nav: '#10', title: 'Exo 10'},
  {id: 'exo11', nav: '#11', title: 'Exo 11'},
  {id: 'exo12', nav: '#12', title: 'Exo 12'},
  {id: 'exo13', nav: '#13', title: 'Exo 13'},
  {id: 'exo14', nav: '#14', title: 'Exo 14'},
];

var app = {
  init: function () {
    var target = $('#nav');
    $('<a href="index.html">Home</a>').appendTo(target);
    $.each(exos, function(index) {
      var uri = 'exo'+(index+1)+'.html';
      $('<a>', {
        href: uri,
        text: exos[index].nav || 'Exo'+(index+1),
      }).appendTo(target);
      if ($('.exo').length) {
        var link = $('<a>', {
          href: exos[index].file || uri,
          class: 'lien-epreuve',
          text: exos[index].title || 'Lancer l\'exercice',
        });
        $('.exo').eq(index).append(link);
      }
    });

    //active
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    $('#nav a').each(function(i,e) {
      var cur = $(e);
      if (cur.attr('href') === filename) cur.addClass('active');
    });
  },
};

var check = {
  init: function() {
    check.area = $('#test');
    check.container = $('#container');
    check.area.removeClass();
  },
  clean: function(){
    check.area.removeClass();
  },
  default: function() {
    var success = false;

    check.display(success);
  },
  exo5: function(fn) {
    check.init();
    if (fn(4) === 8 && fn(-4) === -8 && fn(0) === 0) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo6: function(fn) {
    check.init();
    if (!fn(1) && fn(2) && !fn(3) && fn(35468432)) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo7: function(fn) {
    check.init();
    if (fn('test1.css') === 'css'
      && fn('jquery.min.js') === 'js'
      && fn('.eslintrc') === 'eslintrc'
      && fn('monfichier') === false) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo8: function(fn) {
    check.init();
    if (fn(['coucou', 'hello', 'bonjour']) === 'bonjour'
      && fn(['css', 'html', 'js', 'php']) === 'html'
      && fn([]) === false
      && fn(['un', 2, 'trois', 4, 'cinq']) === 'trois') check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo9: function(fn) {
    check.init();
    if (fn([1, 2, 3]) === 6
      && fn(['un', 2, 'trois', 4, 'cinq']) === 6
      && fn([]) === 0
      && fn([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo10: function(fn) {
    check.init();
    if (fn(0) === 0
      && fn(1) === 1
      && fn(2) === 1
      && fn(3) === 2
      && fn(4) === 3
      && fn(5) === 5
      && fn(6) === 8
      && fn(7) === 13
      && fn(8) === 21
      && fn(9) === 34
      && fn(10) === 55
      && fn(11) === 89
      && fn(12) === 144) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo11: function() {
    check.init();
    if ($('#container > div').children().eq(2).text().trim() === 'Challenge réussi !') check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo12: function() {
    check.init();
    $('#container').on('submit', function() { check.clean();
      setTimeout(function(){
        if ($('#result').is(':visible')) check.area.addClass('success');
        else check.area.addClass('error');
      }, 10);
    });
    if ($('#result').is(':visible')) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo13: function() {
    check.init();
    var tt = 0;
    $(document).on('keyup', function(evt) {
      check.clean();

      if (evt.which === 13) {
        tt += 10;
      }
      // Sinon, j'incrémente
      else {
        tt++;
      }
      setTimeout(function(){
        if ($('#result').text() == tt) check.area.addClass('success');
        else check.area.addClass('error');
      }, 0);
    });
  },
  display: function(success) {
    $('#test').removeClass().addClass(success ? 'success' : 'error');
  }
};

$(app.init);
