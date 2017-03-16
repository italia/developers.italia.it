$(document).ready(function() {
  $(function() {
    $('#cerca').on('keyup', function(event) {
      var text = event.target.value.toLowerCase()
      $('#projects > ul > li').each(function(index, elem) {
        var project = $(elem).find('span').html().toLowerCase()
        if (project.indexOf(text) < 0) {
          $(elem).addClass('u-hidden')
          $(elem).attr('tabindex', '-1')
        }
        else {
          $(elem).removeClass('u-hidden')
          $(elem).attr('tabindex', '0')
        }
      })
    })
  })
})
