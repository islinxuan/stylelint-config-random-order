const position = require("./groups/position.js");
const layout = require("./groups/layout.js");
const borderBox = require("./groups/borderbox.js");
const typography = require("./groups/typography.js");
const interaction = require("./groups/interaction.js");
const background = require("./groups/background.js");
const transition = require("./groups/transition.js");

module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      {
        // for reset, etc
        properties: ["all", "apperance", "table-layout", "border-collapse"],
      },
      {
        properties: position,
      },
      {
        properties: layout,
      },
      {
        properties: borderBox,
      },
      {
        properties: typography,
      },
      {
        properties: interaction,
      },
      {
        properties: background,
      },
      {
        properties: transition,
      },
    ],
  },
};
