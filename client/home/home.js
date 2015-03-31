Template.Home.events({
  'submit #amount': function (e) {
    e.preventDefault();
    var price = $(e.target).find('#price').val();
    Meteor.call('createCard', price, function (error, result) {
      if (!error)
        Router.go('card', { _id: result });
    });
  },
})