var seedVotes = [];
var optionNames = ["A horse sized duck","100 duck-sized horses"];

Meteor.startup(function() {
	if (Votes.find().count() === 0) {
		for(var vote in seedVotes) {
			Votes.insert({
				voteFor: seedVotes[vote],
				name: optionNames[seedVotes[vote]-1],
				voteTime: new Date()
			});
		}
	}
});