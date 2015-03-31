
// Important to keep publishes in a dedicated server
// file for security
Meteor.publish('cardById', function (cardId) {
  return Cards.findOne(cardId);
});