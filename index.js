const position = require("./groups/position.js");
const layout = require("./groups/layout.js");
const sizing = require("./groups/sizing.js");
const foreground = require("./groups/foreground.js");
const background = require("./groups/background.js");
const overflow = require("./groups/overflow.js");
const transform = require("./groups/transform.js");

module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      {
        // for reset, etc
        properties: [
          "all",
          "content",
          "box-sizing",
          "border-collapse",
          "table-layout",
          "color-scheme",
          "apperance",
          "cursor",
          "user-select",
          "list-style",
          "list-style-position",
          "list-style-image",
          "list-style-type",
        ],
      },
      {
        properties: position,
      },
      {
        properties: layout,
      },
      {
        properties: sizing,
      },
      {
        properties: foreground,
      },
      {
        properties: background,
      },
      {
        properties: overflow,
      },
      {
        properties: transform,
      },
    ],
  },
};
