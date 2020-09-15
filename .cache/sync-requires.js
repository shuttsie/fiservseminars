const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\React\\fiservseminars\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\app.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\Home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\index.js"))),
  "component---src-pages-meetings-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\Meetings.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("D:\\React\\fiservseminars\\src\\pages\\Profile.js")))
}

