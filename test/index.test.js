const assert = require("assert");
const stylelint = require("stylelint");

const randomOrder = require("../index.js");
const [fixture, expected] = ["test/fixture.css", "test/expected.css"];
const intentionalwrong = 3;

const runStylelint = async (css) => {
  const { results } = await stylelint.lint({
    config: randomOrder,
    files: css,
  });
  return results[0];
};

describe("code review", () => {
  it("no repeat properties", () => {
    const props = [];
    for (const groups of randomOrder.rules["order/properties-order"]) {
      props.push(...groups.properties);
    }
    assert.equal(new Set(props).size, props.length);
  });
});

describe("stylelint", () => {
  it("with incorrect order", async () => {
    const results = await runStylelint(fixture);
    assert.ok(results.errored);
    assert.equal(results.warnings.length, intentionalwrong);

    // stylelint test/*.css  --config index.js --max-warnings 0
    assert.equal(
      results.warnings[0].text.trim(),
      `Expected "display" to come before "box-sizing" (order/properties-order)`
    );
  });

  it("with correct order", async () => {
    const results = await runStylelint(expected);
    assert.ok(!results.errored);
    assert.equal(results.warnings.length, 0);
  });
});
