const RefreshCreditsDaily = require("./jobs/RefreshCreditsDaily");

class ManagerCron {
  constructor() {
    this.jobs = [RefreshCreditsDaily]
  }

  run() {
    this.jobs.forEach(job => job.start())
  }
}

module.exports = new ManagerCron()