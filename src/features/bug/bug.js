import React from "react";

function bug(bug) {
  /*this will serve as our Bug class so if there is a new bug created 
     this component will be the blue print to create it*/

  if (bug != undefined) {
    this.id = bug.id;
    this.name = bug.name;
    this.details = bug.details;
    this.priority = bug.priority;
    this.version = bug.version;
    this.assignedTo = bug.assignedTo;
    this.reporter = bug.reporter;
    this.time = bug.time;
    this.step = bug.step;
  }
}

export default bug;
