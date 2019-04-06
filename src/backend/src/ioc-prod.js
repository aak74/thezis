const { asClass, asValue, Lifetime } = require('awilix');
const express = require('express');
const router = require('./router.js');
const config = require('./config');

const IoC = require('./IoC');
const ioc = new IoC;

ioc.register({
  config: asValue(config),
  router: asClass(router),
});

const container = ioc.loadModules([
  'App.js',
  'utils/*.js',
  'model/*.js',
  'controller/*.js',
  'query/*.js',
  'command/*.js',
  // 'model/__mocks__/*.js',
  // 'query/__mocks__/*.js',
  // 'command/__mocks__/*.js',
], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON
  }
});

module.exports = container;
