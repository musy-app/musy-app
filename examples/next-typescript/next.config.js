/* eslint-disable @typescript-eslint/no-var-requires */
const withPreconstruct = require("@preconstruct/next");
const { withGroovy } = require("@musy-app/groovy/next");

module.exports = withPreconstruct(withGroovy());
