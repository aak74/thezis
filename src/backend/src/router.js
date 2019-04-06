var express = require('express');
var app = express();

class Router {
  constructor({
    logger,
    config,
  }) {
    this.logger = logger;
    this.port = config.http.port;
  }

  async run() {
    const self = this;

    app.route('/api/v1');
    app.get('/', async (req, res) => {
      res.send('API.v1');
    });

    app.listen(this.port, (err) => {
      if (err) {
        self.logger.error('Server error', err);
        return;
      }
      self.logger.info(`Server is listening on ${this.port}`);
    });
  }
}

module.exports = Router;
