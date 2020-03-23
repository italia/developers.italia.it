const _ = require('lodash')

const icons = require('./ita/font/selection.json').icons

module.exports = {
  order: 60,
  context: {
    icons: _.map(icons, (v) => v.properties.name)
  }
}
