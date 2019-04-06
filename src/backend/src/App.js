'use strict';

class App {
  constructor({ logger, db, router }) {
    this.logger = logger;
    this.db = db;
    this.router = router;
  }

  run() {
    
    this.db.on('connect', () => {
      this.logger.info(`Server started`);
      this.router.run();
    });
    this.db.connect();
  }
}

module.exports = App;
