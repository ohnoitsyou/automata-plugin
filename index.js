var debug = require('debug')('Plugin:plugin')
var express = require('express')

class Plugin {
  constructor(options) {
    debug('Plugin constructor')
    this.router = new express.Router()
    return this
  }
}

module.exports = Plugin
