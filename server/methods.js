TOTAL = 100;

Meteor.methods({
  createCard: function (price) {
    var contractId = Contracts.insert({
      val: 'whatever'
    });


    var price = parseInt(price)
    var newTotal = price * TOTAL;

    // setting the contract Id
    // on the card, for later reference, instead of pushing
    // it to an array on the Contracts collection
    var cardId = Cards.insert({
      contractId: contractId,
      price: price,
      total: newTotal
    });

    return cardId;
  },

  'updateVals': function (id, price) {
    var price = parseInt(price);
    var newTotal = price * TOTAL;

    var cardId = Cards.update( id, { $set: {
      price: price,
      total: newTotal
    }});

    return cardId;

  }
})