const core = require('@actions/core');
const github = require('@actions/github');

const exec = require('@actions/exec');


try {
  core.notice("starting the new foxaction!")

  // Get the message input from the action metadata file
  const message = core.getInput('message');
  // Print the message to the standard output
  console.log("console.log: the message is " + message);
  core.notice("core.notice: the message is " + message);
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  // Handle any errors and set the action status to failed
  core.setFailed(error.message);
}
