const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\React\\fiservseminars\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\app.js")))
}

