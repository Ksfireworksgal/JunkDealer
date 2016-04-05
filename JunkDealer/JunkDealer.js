if (Meteor.isClient) {
  // counter starts at 0
 CollectiblesList = new Mongo.Collection("Collectibles");
    };

 

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
