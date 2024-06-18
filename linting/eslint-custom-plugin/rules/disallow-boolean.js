function isCallExpressionBoolean(payload) {
  return payload.type === "CallExpression" && payload.callee?.name === "Boolean"
}

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Disallow use Boolean",
    },
    fixable: "code",
    schema: [], // no options
    messages: {
      useSimple: 'Use "!" or "!!" instead Boolean',
    }
  },
  create: function(context) {
    return {
      IfStatement(node) {
        if (node.test && isCallExpressionBoolean(node.test)) {
          context.report({
            node,
            messageId: "useSimple",
          })
        }
      }
    }
  }
};
