const icons = require('./its/font/selection.json').icons

console.log(icons)

icons.forEach((i, v) => {
  console.log(v.properties.name)
})

module.export = { icons: icons }
