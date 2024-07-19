export default {
  meta: {
    type: 'suggestion', docs: {
      description: 'require computed properties to have an explicit type',
      category: 'Best Practices',
      recommended: false
    }, fixable: null, schema: [] // no options
  }, create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === 'computed') {
          const typeArgument = node.typeParameters && node.typeParameters.params[0];
          if (!typeArgument) {
            context.report({
              node, message: 'Computed property should have an explicit type.'
            });
          }
        }
      }
    };
  }
};
