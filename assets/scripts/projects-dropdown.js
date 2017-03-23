$(document).ready(function() {
  $(function() {
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
      $('#projects > ul > li').each(function(index, elem) {
        var project = $(elem).find('span').html().toLowerCase()
        if (project.indexOf(text) < 0) {
          $(elem)
            .addClass('u-hiddenVisually')
        } else {
          $(elem)
            .removeClass('u-hiddenVisually')
        }
      })
    })
  })
})
