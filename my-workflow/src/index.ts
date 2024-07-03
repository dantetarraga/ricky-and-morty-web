/// <reference types="relagit" />
/// <reference types="relagit/global" />

import { Workflow } from "relagit:actions";

export default new Workflow({
	name: "my-workflow",
	description: "A workflow that does something.",
	hooks: {
		commit(_, repo, details) {
			console.log("You just commit a change:", details.message)
		}
	},
})