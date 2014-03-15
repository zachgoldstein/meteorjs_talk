Votes = new Meteor.Collection('votes');

var optionNames = ["A horse sized duck","100 duck-sized horses"];

function getName(voteOption) {
	if (optionNames[voteOption]) {
		return optionNames[voteOption];
	}
}

Meteor.methods({
	addVote: function(voteOption) {
		Votes.insert(
			{	voteFor: voteOption, 
				name: getName(voteOption-1),
				voteTime: new Date()
			});
	}
});