$(function() {
  var $projects = $('#projects > ul > li').clone()

  $('#search-form').on('submit', function() {
    var $sel = $('#projects > ul > li.is-selected')
    if ($sel.length > 0) {
      window.location = $sel.find('a').attr('href')
      return false
    }
  })

  $('#cerca').on('keydown', function(event) {
    if (event.which === 9 && $(this).is(':focus')) {
      $(this).blur()
      return true
    }
  })

  $('#cerca').on('keyup', function(event) {
    var text = event.target.value.toLowerCase()
    $('#projects > ul').html($projects.filter(function(index, elem) {
      var project = $(elem).find('span').html().toLowerCase()

      if (project.indexOf(text) >= 0) {
        return elem
      }
    }))
    $('#projects > ul > li:first').trigger('mouseenter')
  })
})


$(function() {
  // @FIXME: unwrap deep links in offcanvas menu

  $('.js-fr-offcanvas [data-megamenu-class*=js-Unwrap] ul')
    .each(function(i, el) {
      $(el).find('li').appendTo($(el).parent().parent())
    });

  $('.js-fr-offcanvas [data-megamenu-class*=js-Unwrap]').remove();

})
