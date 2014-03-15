Meteor.subscribe("votes");

Template.voting.getVoteBarWidth = function () {
	var numVotes1 = Votes.find({voteFor : 1}).count();
	var numVotes2 = Votes.find({voteFor : 2}).count();
	var width = numVotes1/(numVotes1 + numVotes2)*100;
	return width;
};

Template.voting.votes = function () {
	return Votes.find({},{sort:{voteTime: -1}});
};

Template.voting.isLeftWinning = function () {
	if (Template.voting.getLeftVotes() > Template.voting.getRightVotes()) {
		return true;
	} else {
		return false;
	}
};

Template.voting.getLeftVotes = function () {
	return Votes.find({voteFor : 1}).count();
};

Template.voting.getRightVotes = function () {
	return Votes.find({voteFor : 2}).count();
};

Template.voting.events({
  'click .vote-left': function () {
    Meteor.call("addVote", 1);
  },
  'click .vote-right': function () {
    Meteor.call("addVote", 2);
  }
});