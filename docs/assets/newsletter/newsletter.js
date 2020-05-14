var newsletter = (function($, MailUpClient) {
  var CLIENT_ID = '6a324fe1-5bfa-4b5f-815b-f05d2d7efcd8'
  var CLIENT_SECRET = 'f05b406e-deb8-408d-8cfd-8f2a92111dde'
  var CALLBACK_URI = 'http://127.0.0.1:8080/'

  var mailUp = new MailUpClient(CLIENT_ID, CLIENT_SECRET, CALLBACK_URI)

  return {
    /* this is actually adding a new recipient in subscribed state */
    subscribe: add,
    /* this subscribes an existing recipient to another list, it cannot un-unsubscribe! */
    // subscribeToAnotherList: subscribe,
    unsubscribe: unsubscribe,
    /* this won't work, there is no way we can remove a recipient through API */
    // remove: remove
  }

  function add(email) {
    var deferred = $.Deferred()

    mailUp.callMethod(
      mailUp.getConsoleEndpoint() + '/Console/List/1/Recipient',
      'POST',
      JSON.stringify({
        Name: email,
        Email: email,
        /* these fields are optional */
        // MobileNumber: '',
        // MobilePrefix: '',
        // Fields: [{
        //   Id: 1,
        //   Description: 'name',
        //   Value: email
        // }]
      }),
      'JSON',
      deferred.resolve,
      deferred.reject
    )

    return deferred.promise()
  }

  function subscribe(email, anotherListId) {
    return findRecipientByEmail(email, 'Unsubscribed').done(function(recipientId) {
      return _subscribe(recipientId, anotherListId)
    })
  }

  function unsubscribe(email) {
    return findRecipientByEmail(email, 'Subscribed').done(_unsubscribe)
  }

  function remove(email) {
    return findRecipientByEmail(email, 'Subscribed').done(_remove)
  }

  function findRecipientByEmail(email, state) {
    var deferred = $.Deferred()

    mailUp.callMethod(
      mailUp.getConsoleEndpoint() + '/Console/List/1/Recipients/' + state + '?filterby="Email.Contains(\'' + email + '\')"',
      'GET',
      null,
      'JSON',
      function(data) {
        var response = JSON.parse(data)
        if (response.TotalElementsCount === 0) {
          deferred.reject('Non risulti iscritto alla newsletter.')
          return
        }
        deferred.resolve(response.Items[0].idRecipient)
      },
      deferred.reject
    )

    return deferred.promise()
  }

  function _subscribe(recipientId, listId) {
    var deferred = $.Deferred()

    mailUp.callMethod(
      mailUp.getConsoleEndpoint() + '/Console/List/' + listId + '/Subscribe/' + recipientId,
      'POST',
      null,
      'JSON',
      deferred.resolve,
      deferred.reject
    )

    return deferred.promise()
  }

  function _unsubscribe(recipientId) {
    var deferred = $.Deferred()

    mailUp.callMethod(
      mailUp.getConsoleEndpoint() + '/Console/List/1/Unsubscribe/' + recipientId,
      'DELETE',
      null,
      'JSON',
      deferred.resolve,
      deferred.reject
    )

    return deferred.promise()
  }

  function _remove(recipientId) {
    var deferred = $.Deferred()

    mailUp.callMethod(
      mailUp.getConsoleEndpoint() + '/Console/Recipient/' + recipientId,
      'DELETE',
      null,
      'JSON',
      deferred.resolve,
      deferred.reject
    )

    return deferred.promise()
  }

}(jQuery, MailUpClient))
