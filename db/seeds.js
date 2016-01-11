var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/raks');
var RakModel = require("../models/rak");
RakModel.remove({}, function(err){
  console.log(err);
});

var rak1 = new RakModel({body: "Buy something for the person behind you"}).save();
var rak2 = new RakModel({body: "Hold the door or elevator for someone"}).save();
var rak3 = new RakModel({body: "Send someone a note of appreciation"}).save();

var acts = ["Introduce yourself to your neighbors", "Compliment a stranger", "Donate your talents", "Send paper thank you notes", "Help people move", "Call your parents and tell them you love them", "Give away warm clothes, shoes, and/or boots to the homeless", "Reach out to a person who has made a difference in your life", "Send a care package to a solider", "After sweeping leaves or shoveling snow do your neighbors sidewalk/yard too", " Tell a parent how well behaved their child has been", "Bake a cake for the birthday person", "Let someone else have your seat on the crowded bus or subway", "Do the task no one else wants to do", "Tip generously", " Give a homeless person a gift certificate to a restaurant", "Say good morning to a person standing next to you in the elevator", "Put a coin in an expired meter", "Let someone else have their way without putting up a fight about it", "Donate your vacation or sick days to a person at work", "Tell a person looking for a job when you hear about an opening", "Donate used books to a library", "Let Someone Go in Line in Front of You", " Write a Letter to Someone Who Made a Difference in Your Life", " Volunteer at an animal shelter", " Pick Up Trash", " Bring Someone a Souvenir", " Collect Canned Food for a Food Bank", " Give Event Tickets to someone as a surprise", " Encourage Someone", " Help Someone Load or Unload their Groceries", " Thank Your Mail Carrier", " Put Gas in Someone's Car", " Compliment 5 or More People Today", " Write a Thank You Note", " Share a Snack", " Take Out The Trash", " Start a Piggy Bank for a Cause", " Transport Someone Who Can't Drive", " Bring In Your Neighbor's Trash Cans", " Leave Change in Vending Machine", " Invite Someone Over for the Holidays", " Eat/Shop Locally", " Donate Blood", " Buy an Extra Bag of Dog/Cat Food and Donate It to a Local Animal Shelter", " Send Flowers", " Donate Your Time to a Charity", " Bring snacks for the office", " Sponsor a Local Kids Sports Team", " Plant a Tree in Memory", " Each time you get a new item of clothing give away something old.", " Call or write to a teacher who changed your life.", " Forgive someone a debt–and never bring it up again", " Throw away your trash—and someone else's", " Volunteer to take care of a friend's dog while they are vacationing.", " Help a friend pack for a move"];
for(i = 0; i < acts.length; i++){
  new RakModel({body: acts[i]}).save();
  console.log(acts[i]);
}
