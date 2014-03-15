Meteor.publish('votes', function (){
	return Votes.find({},{sort:{voteTime: -1}});
});