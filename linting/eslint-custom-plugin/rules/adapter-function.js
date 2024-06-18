module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Name of function, which will return map array, must starts with 'adapter' and be in camelCase",
    },
    fixable: "code",
    schema: [], // no options
    messages: {
      startWithAdapter: "Function name should be started with 'adapter'",
      lowerCaseAdapter: "Function name should be started with 'adapter' in lowerCase",
      functionShouldIncludeAdapter: "Function must include 'adapter'",
      adapterShouldReceiveParams: "Adapter Function must receive params",
      allParamsShouldBeTyped: "All params in adapter function should be typed",
      firstParamShouldBeArray: "First parameter should be an array",
      payloadShouldIncludedArray: "Payload should include array key",
      responseShouldBeTyped: "Response in adapter function should be typed",
      returnTypeArray: "Return type in adapter function should be an array or include array key"
    }
  },
  create: function(context) {
    return {
      FunctionDeclaration(node) {
        const funcName = node.id.name
        const isFuncNameIncludesAdapter = funcName.match(/adapter/i)

        if (
          node.returnType?.typeAnnotation?.type === "ArrayTypeAnnotation"
          || (
            node.returnType?.typeAnnotation?.type === "GenericTypeAnnotation"
            && node.returnType?.typeAnnotation?.id?.name === "Array"
          )
          || (
            node.returnType?.typeAnnotation?.type === "ObjectTypeAnnotation"
            && node.returnType?.typeAnnotation?.properties.some(el => {
              return (
                  el.value?.type === "GenericTypeAnnotation"
                  && el.value?.id?.name === "Array"
                )
                || el.value?.type === "ArrayTypeAnnotation"
            })
          )
        ) {
          // Return object is Array or includes an array
          if (
            node.params.length
            && (
              (
                node.params[0].typeAnnotation?.typeAnnotation?.type === "ObjectTypeAnnotation"
                && node.params[0].typeAnnotation?.typeAnnotation?.properties.some(el => {
                  return (
                      el.value?.type === "GenericTypeAnnotation"
                      && el.value?.id?.name === "Array"
                    )
                    || el.value?.type === "ArrayTypeAnnotation"
                })
              )
              || node.params[0].typeAnnotation?.typeAnnotation?.type === "ArrayTypeAnnotation"
              || (
                node.params[0].typeAnnotation?.typeAnnotation?.type === "GenericTypeAnnotation"
                && node.params[0].typeAnnotation?.typeAnnotation?.id?.name === "Array"
              )
            )
          ) {
            // params includes array
            // Function should start with adapter

            context.report({
              node,
              messageId: "startWithAdapter",
            })
          }
        }

        if (isFuncNameIncludesAdapter) {
          if(isFuncNameIncludesAdapter.index > 0) {
            context.report({
              node,
              messageId: "startWithAdapter",
            })
          } else if (funcName[0] === "A") {
            context.report({
              node,
              messageId: "lowerCaseAdapter",
            })
          }

          if (!node.returnType) {
            context.report({
              node,
              messageId: "responseShouldBeTyped",
            })
          } else if (
            node.returnType?.typeAnnotation?.type !== "ArrayTypeAnnotation"
            || (
              node.returnType?.typeAnnotation?.type === "GenericTypeAnnotation"
              && node.returnType?.typeAnnotation?.id?.name !== "Array"
            )
            || (
              node.returnType?.typeAnnotation?.type === "ObjectTypeAnnotation"
              && !node.returnType?.typeAnnotation?.properties.some(el => {
                return (
                  el.value?.type === "GenericTypeAnnotation"
                  && el.value?.id?.name === "Array"
                )
                || el.value?.type === "ArrayTypeAnnotation"
              })
            )
          ) {
            context.report({
              node,
              messageId: "returnTypeArray",
            })
          }

          if (!node.params.length) {
            context.report({
              node,
              messageId: "adapterShouldReceiveParams",
            })
          } else {
            if (node.params.some(el => !el.typeAnnotation)) {
              context.report({
                node,
                messageId: "allParamsShouldBeTyped",
              })
            } else {
              if (node.params[0].typeAnnotation?.typeAnnotation?.type === "ObjectTypeAnnotation") {
                if (!node.params[0].typeAnnotation?.typeAnnotation?.properties.some(el => {
                  return (
                      el.value?.type === "GenericTypeAnnotation"
                      && el.value?.id?.name === "Array"
                    )
                    || el.value?.type === "ArrayTypeAnnotation"
                  })
                ) {
                  context.report({
                    node,
                    messageId: "payloadShouldIncludedArray",
                  })
                }
              }
              else if (
                node.params[0].typeAnnotation?.typeAnnotation?.type !== "ArrayTypeAnnotation"
                || (
                  node.params[0].typeAnnotation?.typeAnnotation?.type === "GenericTypeAnnotation"
                  && node.params[0].typeAnnotation?.typeAnnotation?.id?.name !== "Array"
                )
              ) {
                context.report({
                  node,
                  messageId: "firstParamShouldBeArray",
                })
              }
            }
          }
        }
      },
    };
  }
};
