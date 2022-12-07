const assert = require("assert");
const stylelint = require("stylelint");

const randomOrder = require("../index.js");
const [fixture, expected] = ["test/fixture.css", "test/expected.css"];
const intentionalWrong = 1;

const runStylelint = async (css) => {
  const { results } = await stylelint.lint({
    config: randomOrder,
    files: css,
  });
  return results[0];
};

describe("Code lint plus", () => {
  it("no repeat properties", () => {
    const properties = [];
    for (const groups of randomOrder.rules["order/properties-order"]) {
      properties.push(...groups.properties);
    }
    assert.equal(new Set(properties).size, properties.length);
  });
});

// stylelint test/*.css  --config index.js --max-warnings 0
describe("Code test", () => {
  it("with incorrect order", async () => {
    const results = await runStylelint(fixture);
    assert.equal(results.warnings.length, intentionalWrong);
    console.log(results.warnings);
  });

  it("with correct order", async () => {
    const results = await runStylelint(expected);
    assert.equal(results.warnings.length, 0);
  });
});
