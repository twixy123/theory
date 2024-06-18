const adapterFunctionRule = require("./rules/adapter-function");
const disallowBoolean = require("./rules/disallow-boolean");
const plugin = {
  rules: {
    "adapter-function": adapterFunctionRule,
    "disallow-boolean": disallowBoolean,
  }
};
module.exports = plugin;
