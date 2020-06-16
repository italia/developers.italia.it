(function($, newsletter) {
  $('#newsletter form').on('submit', function(event) {
    event.preventDefault()

    var $email = $(this).find('#email')

    newsletter.subscribe($email.val())
    .done(function(data) {
      $email.val('')
      alert('Iscrizione avvenuta!')
    }).fail(function(error) {
      alert('Spiacenti, si è verificato un errore: ' + error)
    })
  })
}(jQuery, newsletter))
