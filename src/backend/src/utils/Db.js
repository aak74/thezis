'use strict';
const config = require('../config');
const { EventEmitter } = require('events');

class Db extends EventEmitter {
  constructor ({logger}) {
    super();
    this.logger = logger;
    this.db = null;
  }

  async connect () {
    this.emit('connect');
  }
}

module.exports = Db;
