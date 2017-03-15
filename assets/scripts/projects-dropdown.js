$(function() {
  $('#cerca').on('keyup', function(event) {
    var text = event.target.value.toLowerCase()
    $('#projects > ul > li').each(function(index, elem) {
      var project = $(elem).find('span').html().toLowerCase()
      $(elem).toggleClass('u-hiddenVisually', project.indexOf(text) < 0)
    })
  })
})
