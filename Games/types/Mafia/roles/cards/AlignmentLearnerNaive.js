const Card = require("../../Card");
const { PRIORITY_ALIGNMENT_LEARNER } = require("../../const/Priority");

module.exports = class AlignmentLearnerNaive extends Card {

	constructor(role) {
		super(role);

		this.meetings = {
			"Learn Alignment": {
				states: ["Night"],
				flags: ["voting"],
				action: {
					labels: ["investigate", "alignment"],
					priority: PRIORITY_ALIGNMENT_LEARNER,
					run: function () {
						var alert = `You learn that ${this.target.name} is sided with the Village.`;
						this.game.queueAlert(alert, 0, this.meeting.getPlayers());
					}
				}
			}
		}
	};

}