Template.Card.events({
  'keyup #price': function (e) {
    Meteor.call('updateVals', this._id, e.target.value);
  }
});

Template.Card.helpers({
  cardData: function () {
    // get the "card" document directly instead
    // of going through the contract
    var id = Iron.controller().getParams()._id;
    return Cards.findOne(id);
  },
});

Template.Card.rendered = function () {
  // subscribe by id only
  var id = Iron.controller().getParams()._id;
  Meteor.subscribe('cardById', id);
}