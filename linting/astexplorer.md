[astexplorer.net](https://astexplorer.net/)

**Config**

- lang - JavaScript
- linter - @typescript-eslint/parser
- transform - eslintv8

```typescript
export function someAdapter(arr: Array<any>): Array<any> {
	return arr.map(el => {
		return {...el, id: 1}
	})
}

const someAdapter2 = (arr: Array<any>): Array<any> => {
	return arr.map(el => {
		return {...el, id: 1}
	})
}

function someAdapter3(arr: Array<any>): Array<any> {
	return arr.map(el => {
		return {...el, id: 1}
	})
}


```




## Boolean disallow

```typescript
if (Boolean(someVar)) {
	
}

function someAdapter(someVar) {
if (Boolean(someVar)) {
	
}
}

[].some(el => Boolean(el));

[].some(Boolean);

function someFunc(payload: boolean) {
	return Boolean(payload);
}

someFunc(Boolean(someVar));

export default class HomeView extends Vue {
  name: IName = {
    categoryId: 123,
    categoryIdList: [123],
    isRequired: false,
    value: "",
  };

  isShow = false;

  someObject: { [key: string]: any; name: string; } = {
    name: "sadasd",
  };

  get nameWithHello(): IName {
    return this.name;
  }

  get isNameExist(): boolean {
    return Boolean(this.name.value);
  }

  async beforeMount(): Promise<void> {
    this.name.categoryId = Math.random() * 100;

    if (!!this.name.value) this.name.categoryId = 1;
    this.name.categoryId = this.isShow
      ? 0
      : 1;
  }

  onClick(msg: string): void {
    // eslint-disable-next-line no-console
    console.log("%c msg", "color: red", msg);

    if (Boolean(msg) && msg && someFunc(msg) && Boolean(msg.length) && msg.length) {
      // eslint-disable-next-line no-console
      console.log("%c msg", "color: red", msg);
      // eslint-disable-next-line no-console
      console.log("%c asdasd", "color: red");
    }

    if (Boolean(msg)) {
      // eslint-disable-next-line no-console
      console.log("%c msg", "color: red", msg);
      // eslint-disable-next-line no-console
      console.log("%c asdasd", "color: red");
    }
  }
}
```

```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "Boolean",
          "range": [
            4,
            11
          ]
        },
        "arguments": [
          {
            "type": "Identifier",
            "name": "someVar",
            "range": [
              12,
              19
            ]
          }
        ],
        "optional": false,
        "range": [
          4,
          20
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          22,
          27
        ]
      },
      "alternate": null,
      "range": [
        0,
        27
      ]
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "someAdapter",
        "range": [
          38,
          49
        ]
      },
      "generator": false,
      "expression": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "name": "someVar",
          "range": [
            50,
            57
          ]
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "Boolean",
                "range": [
                  65,
                  72
                ]
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "someVar",
                  "range": [
                    73,
                    80
                  ]
                }
              ],
              "optional": false,
              "range": [
                65,
                81
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                83,
                88
              ]
            },
            "alternate": null,
            "range": [
              61,
              88
            ]
          }
        ],
        "range": [
          59,
          90
        ]
      },
      "range": [
        29,
        90
      ]
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              92,
              94
            ]
          },
          "property": {
            "type": "Identifier",
            "name": "some",
            "range": [
              95,
              99
            ]
          },
          "computed": false,
          "optional": false,
          "range": [
            92,
            99
          ]
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "el",
                "range": [
                  100,
                  102
                ]
              }
            ],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "Boolean",
                "range": [
                  106,
                  113
                ]
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "el",
                  "range": [
                    114,
                    116
                  ]
                }
              ],
              "optional": false,
              "range": [
                106,
                117
              ]
            },
            "async": false,
            "expression": true,
            "range": [
              100,
              117
            ]
          }
        ],
        "optional": false,
        "range": [
          92,
          118
        ]
      },
      "range": [
        92,
        119
      ]
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              121,
              123
            ]
          },
          "property": {
            "type": "Identifier",
            "name": "some",
            "range": [
              124,
              128
            ]
          },
          "computed": false,
          "optional": false,
          "range": [
            121,
            128
          ]
        },
        "arguments": [
          {
            "type": "Identifier",
            "name": "Boolean",
            "range": [
              129,
              136
            ]
          }
        ],
        "optional": false,
        "range": [
          121,
          137
        ]
      },
      "range": [
        121,
        138
      ]
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "someFunc",
        "range": [
          149,
          157
        ]
      },
      "generator": false,
      "expression": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "name": "payload",
          "range": [
            158,
            174
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "range": [
              165,
              174
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                167,
                174
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "Boolean",
                "range": [
                  186,
                  193
                ]
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "payload",
                  "range": [
                    194,
                    201
                  ]
                }
              ],
              "optional": false,
              "range": [
                186,
                202
              ]
            },
            "range": [
              179,
              203
            ]
          }
        ],
        "range": [
          176,
          205
        ]
      },
      "range": [
        140,
        205
      ]
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "someFunc",
          "range": [
            207,
            215
          ]
        },
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "Boolean",
              "range": [
                216,
                223
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "someVar",
                "range": [
                  224,
                  231
                ]
              }
            ],
            "optional": false,
            "range": [
              216,
              232
            ]
          }
        ],
        "optional": false,
        "range": [
          207,
          233
        ]
      },
      "range": [
        207,
        234
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "id": {
          "type": "Identifier",
          "name": "HomeView",
          "range": [
            257,
            265
          ]
        },
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "key": {
                "type": "Identifier",
                "name": "name",
                "range": [
                  282,
                  286
                ]
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "categoryId",
                      "range": [
                        302,
                        312
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "range": [
                        314,
                        317
                      ]
                    },
                    "computed": false,
                    "method": false,
                    "shorthand": false,
                    "kind": "init",
                    "range": [
                      302,
                      317
                    ]
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "categoryIdList",
                      "range": [
                        323,
                        337
                      ]
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "range": [
                            340,
                            343
                          ]
                        }
                      ],
                      "range": [
                        339,
                        344
                      ]
                    },
                    "computed": false,
                    "method": false,
                    "shorthand": false,
                    "kind": "init",
                    "range": [
                      323,
                      344
                    ]
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "isRequired",
                      "range": [
                        350,
                        360
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "range": [
                        362,
                        367
                      ]
                    },
                    "computed": false,
                    "method": false,
                    "shorthand": false,
                    "kind": "init",
                    "range": [
                      350,
                      367
                    ]
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "value",
                      "range": [
                        373,
                        378
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "range": [
                        380,
                        382
                      ]
                    },
                    "computed": false,
                    "method": false,
                    "shorthand": false,
                    "kind": "init",
                    "range": [
                      373,
                      382
                    ]
                  }
                ],
                "range": [
                  296,
                  387
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "range": [
                282,
                388
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "range": [
                  286,
                  293
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "name": "IName",
                    "range": [
                      288,
                      293
                    ]
                  },
                  "range": [
                    288,
                    293
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "key": {
                "type": "Identifier",
                "name": "isShow",
                "range": [
                  392,
                  398
                ]
              },
              "value": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "range": [
                  401,
                  406
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "range": [
                392,
                407
              ]
            },
            {
              "type": "PropertyDefinition",
              "key": {
                "type": "Identifier",
                "name": "someObject",
                "range": [
                  411,
                  421
                ]
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "name",
                      "range": [
                        469,
                        473
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": "sadasd",
                      "raw": "\"sadasd\"",
                      "range": [
                        475,
                        483
                      ]
                    },
                    "computed": false,
                    "method": false,
                    "shorthand": false,
                    "kind": "init",
                    "range": [
                      469,
                      483
                    ]
                  }
                ],
                "range": [
                  463,
                  488
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "range": [
                411,
                489
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "range": [
                  421,
                  460
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "name": "key",
                          "range": [
                            426,
                            437
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "range": [
                              429,
                              437
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                431,
                                437
                              ]
                            }
                          }
                        }
                      ],
                      "range": [
                        425,
                        444
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "range": [
                          438,
                          443
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            440,
                            443
                          ]
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "name": "name",
                        "range": [
                          445,
                          449
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "range": [
                          449,
                          457
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            451,
                            457
                          ]
                        }
                      },
                      "range": [
                        445,
                        458
                      ]
                    }
                  ],
                  "range": [
                    423,
                    460
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "key": {
                "type": "Identifier",
                "name": "nameWithHello",
                "range": [
                  497,
                  510
                ]
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "expression": false,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            533,
                            537
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "name",
                          "range": [
                            538,
                            542
                          ]
                        },
                        "computed": false,
                        "optional": false,
                        "range": [
                          533,
                          542
                        ]
                      },
                      "range": [
                        526,
                        543
                      ]
                    }
                  ],
                  "range": [
                    520,
                    547
                  ]
                },
                "range": [
                  510,
                  547
                ],
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "range": [
                    512,
                    519
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "name": "IName",
                      "range": [
                        514,
                        519
                      ]
                    },
                    "range": [
                      514,
                      519
                    ]
                  }
                }
              },
              "computed": false,
              "static": false,
              "kind": "get",
              "override": false,
              "range": [
                493,
                547
              ]
            },
            {
              "type": "MethodDefinition",
              "key": {
                "type": "Identifier",
                "name": "isNameExist",
                "range": [
                  555,
                  566
                ]
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "expression": false,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "Boolean",
                          "range": [
                            591,
                            598
                          ]
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  599,
                                  603
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "name",
                                "range": [
                                  604,
                                  608
                                ]
                              },
                              "computed": false,
                              "optional": false,
                              "range": [
                                599,
                                608
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "value",
                              "range": [
                                609,
                                614
                              ]
                            },
                            "computed": false,
                            "optional": false,
                            "range": [
                              599,
                              614
                            ]
                          }
                        ],
                        "optional": false,
                        "range": [
                          591,
                          615
                        ]
                      },
                      "range": [
                        584,
                        616
                      ]
                    }
                  ],
                  "range": [
                    578,
                    620
                  ]
                },
                "range": [
                  566,
                  620
                ],
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "range": [
                    568,
                    577
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      570,
                      577
                    ]
                  }
                }
              },
              "computed": false,
              "static": false,
              "kind": "get",
              "override": false,
              "range": [
                551,
                620
              ]
            },
            {
              "type": "MethodDefinition",
              "key": {
                "type": "Identifier",
                "name": "beforeMount",
                "range": [
                  630,
                  641
                ]
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "expression": false,
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                665,
                                669
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name",
                              "range": [
                                670,
                                674
                              ]
                            },
                            "computed": false,
                            "optional": false,
                            "range": [
                              665,
                              674
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "categoryId",
                            "range": [
                              675,
                              685
                            ]
                          },
                          "computed": false,
                          "optional": false,
                          "range": [
                            665,
                            685
                          ]
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "name": "Math",
                                "range": [
                                  688,
                                  692
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "random",
                                "range": [
                                  693,
                                  699
                                ]
                              },
                              "computed": false,
                              "optional": false,
                              "range": [
                                688,
                                699
                              ]
                            },
                            "arguments": [],
                            "optional": false,
                            "range": [
                              688,
                              701
                            ]
                          },
                          "right": {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "range": [
                              704,
                              707
                            ]
                          },
                          "range": [
                            688,
                            707
                          ]
                        },
                        "range": [
                          665,
                          707
                        ]
                      },
                      "range": [
                        665,
                        708
                      ]
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  720,
                                  724
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "name",
                                "range": [
                                  725,
                                  729
                                ]
                              },
                              "computed": false,
                              "optional": false,
                              "range": [
                                720,
                                729
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "value",
                              "range": [
                                730,
                                735
                              ]
                            },
                            "computed": false,
                            "optional": false,
                            "range": [
                              720,
                              735
                            ]
                          },
                          "range": [
                            719,
                            735
                          ]
                        },
                        "range": [
                          718,
                          735
                        ]
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  737,
                                  741
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "name",
                                "range": [
                                  742,
                                  746
                                ]
                              },
                              "computed": false,
                              "optional": false,
                              "range": [
                                737,
                                746
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "categoryId",
                              "range": [
                                747,
                                757
                              ]
                            },
                            "computed": false,
                            "optional": false,
                            "range": [
                              737,
                              757
                            ]
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "range": [
                              760,
                              761
                            ]
                          },
                          "range": [
                            737,
                            761
                          ]
                        },
                        "range": [
                          737,
                          762
                        ]
                      },
                      "alternate": null,
                      "range": [
                        714,
                        762
                      ]
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                767,
                                771
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name",
                              "range": [
                                772,
                                776
                              ]
                            },
                            "computed": false,
                            "optional": false,
                            "range": [
                              767,
                              776
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "categoryId",
                            "range": [
                              777,
                              787
                            ]
                          },
                          "computed": false,
                          "optional": false,
                          "range": [
                            767,
                            787
                          ]
                        },
                        "right": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                790,
                                794
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "isShow",
                              "range": [
                                795,
                                801
                              ]
                            },
                            "computed": false,
                            "optional": false,
                            "range": [
                              790,
                              801
                            ]
                          },
                          "consequent": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "range": [
                              810,
                              811
                            ]
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "range": [
                              820,
                              821
                            ]
                          },
                          "range": [
                            790,
                            821
                          ]
                        },
                        "range": [
                          767,
                          821
                        ]
                      },
                      "range": [
                        767,
                        822
                      ]
                    }
                  ],
                  "range": [
                    659,
                    826
                  ]
                },
                "range": [
                  641,
                  826
                ],
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "range": [
                    643,
                    658
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "name": "Promise",
                      "range": [
                        645,
                        652
                      ]
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        652,
                        658
                      ],
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "range": [
                            653,
                            657
                          ]
                        }
                      ]
                    },
                    "range": [
                      645,
                      658
                    ]
                  }
                }
              },
              "computed": false,
              "static": false,
              "kind": "method",
              "override": false,
              "range": [
                624,
                826
              ]
            },
            {
              "type": "MethodDefinition",
              "key": {
                "type": "Identifier",
                "name": "onClick",
                "range": [
                  830,
                  837
                ]
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "expression": false,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "name": "console",
                            "range": [
                              906,
                              913
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "log",
                            "range": [
                              914,
                              917
                            ]
                          },
                          "computed": false,
                          "optional": false,
                          "range": [
                            906,
                            917
                          ]
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "%c msg",
                            "raw": "\"%c msg\"",
                            "range": [
                              918,
                              926
                            ]
                          },
                          {
                            "type": "Literal",
                            "value": "color: red",
                            "raw": "\"color: red\"",
                            "range": [
                              928,
                              940
                            ]
                          },
                          {
                            "type": "Identifier",
                            "name": "msg",
                            "range": [
                              942,
                              945
                            ]
                          }
                        ],
                        "optional": false,
                        "range": [
                          906,
                          946
                        ]
                      },
                      "range": [
                        906,
                        947
                      ]
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Boolean",
                                  "range": [
                                    957,
                                    964
                                  ]
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "msg",
                                    "range": [
                                      965,
                                      968
                                    ]
                                  }
                                ],
                                "optional": false,
                                "range": [
                                  957,
                                  969
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "msg",
                                "range": [
                                  973,
                                  976
                                ]
                              },
                              "range": [
                                957,
                                976
                              ]
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "someFunc",
                                "range": [
                                  980,
                                  988
                                ]
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "msg",
                                  "range": [
                                    989,
                                    992
                                  ]
                                }
                              ],
                              "optional": false,
                              "range": [
                                980,
                                993
                              ]
                            },
                            "range": [
                              957,
                              993
                            ]
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Boolean",
                              "range": [
                                997,
                                1004
                              ]
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "name": "msg",
                                  "range": [
                                    1005,
                                    1008
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "length",
                                  "range": [
                                    1009,
                                    1015
                                  ]
                                },
                                "computed": false,
                                "optional": false,
                                "range": [
                                  1005,
                                  1015
                                ]
                              }
                            ],
                            "optional": false,
                            "range": [
                              997,
                              1016
                            ]
                          },
                          "range": [
                            957,
                            1016
                          ]
                        },
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "name": "msg",
                            "range": [
                              1020,
                              1023
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length",
                            "range": [
                              1024,
                              1030
                            ]
                          },
                          "computed": false,
                          "optional": false,
                          "range": [
                            1020,
                            1030
                          ]
                        },
                        "range": [
                          957,
                          1030
                        ]
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "name": "console",
                                  "range": [
                                    1085,
                                    1092
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "log",
                                  "range": [
                                    1093,
                                    1096
                                  ]
                                },
                                "computed": false,
                                "optional": false,
                                "range": [
                                  1085,
                                  1096
                                ]
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "%c msg",
                                  "raw": "\"%c msg\"",
                                  "range": [
                                    1097,
                                    1105
                                  ]
                                },
                                {
                                  "type": "Literal",
                                  "value": "color: red",
                                  "raw": "\"color: red\"",
                                  "range": [
                                    1107,
                                    1119
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "name": "msg",
                                  "range": [
                                    1121,
                                    1124
                                  ]
                                }
                              ],
                              "optional": false,
                              "range": [
                                1085,
                                1125
                              ]
                            },
                            "range": [
                              1085,
                              1126
                            ]
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "name": "console",
                                  "range": [
                                    1178,
                                    1185
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "log",
                                  "range": [
                                    1186,
                                    1189
                                  ]
                                },
                                "computed": false,
                                "optional": false,
                                "range": [
                                  1178,
                                  1189
                                ]
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "%c asdasd",
                                  "raw": "\"%c asdasd\"",
                                  "range": [
                                    1190,
                                    1201
                                  ]
                                },
                                {
                                  "type": "Literal",
                                  "value": "color: red",
                                  "raw": "\"color: red\"",
                                  "range": [
                                    1203,
                                    1215
                                  ]
                                }
                              ],
                              "optional": false,
                              "range": [
                                1178,
                                1216
                              ]
                            },
                            "range": [
                              1178,
                              1217
                            ]
                          }
                        ],
                        "range": [
                          1032,
                          1223
                        ]
                      },
                      "alternate": null,
                      "range": [
                        953,
                        1223
                      ]
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "Boolean",
                          "range": [
                            1233,
                            1240
                          ]
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "msg",
                            "range": [
                              1241,
                              1244
                            ]
                          }
                        ],
                        "optional": false,
                        "range": [
                          1233,
                          1245
                        ]
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "name": "console",
                                  "range": [
                                    1300,
                                    1307
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "log",
                                  "range": [
                                    1308,
                                    1311
                                  ]
                                },
                                "computed": false,
                                "optional": false,
                                "range": [
                                  1300,
                                  1311
                                ]
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "%c msg",
                                  "raw": "\"%c msg\"",
                                  "range": [
                                    1312,
                                    1320
                                  ]
                                },
                                {
                                  "type": "Literal",
                                  "value": "color: red",
                                  "raw": "\"color: red\"",
                                  "range": [
                                    1322,
                                    1334
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "name": "msg",
                                  "range": [
                                    1336,
                                    1339
                                  ]
                                }
                              ],
                              "optional": false,
                              "range": [
                                1300,
                                1340
                              ]
                            },
                            "range": [
                              1300,
                              1341
                            ]
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "name": "console",
                                  "range": [
                                    1393,
                                    1400
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "log",
                                  "range": [
                                    1401,
                                    1404
                                  ]
                                },
                                "computed": false,
                                "optional": false,
                                "range": [
                                  1393,
                                  1404
                                ]
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "%c asdasd",
                                  "raw": "\"%c asdasd\"",
                                  "range": [
                                    1405,
                                    1416
                                  ]
                                },
                                {
                                  "type": "Literal",
                                  "value": "color: red",
                                  "raw": "\"color: red\"",
                                  "range": [
                                    1418,
                                    1430
                                  ]
                                }
                              ],
                              "optional": false,
                              "range": [
                                1393,
                                1431
                              ]
                            },
                            "range": [
                              1393,
                              1432
                            ]
                          }
                        ],
                        "range": [
                          1247,
                          1438
                        ]
                      },
                      "alternate": null,
                      "range": [
                        1229,
                        1438
                      ]
                    }
                  ],
                  "range": [
                    857,
                    1442
                  ]
                },
                "range": [
                  837,
                  1442
                ],
                "params": [
                  {
                    "type": "Identifier",
                    "name": "msg",
                    "range": [
                      838,
                      849
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "range": [
                        841,
                        849
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          843,
                          849
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "range": [
                    850,
                    856
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      852,
                      856
                    ]
                  }
                }
              },
              "computed": false,
              "static": false,
              "kind": "method",
              "override": false,
              "range": [
                830,
                1442
              ]
            }
          ],
          "range": [
            278,
            1444
          ]
        },
        "superClass": {
          "type": "Identifier",
          "name": "Vue",
          "range": [
            274,
            277
          ]
        },
        "range": [
          251,
          1444
        ]
      },
      "range": [
        236,
        1444
      ],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "range": [
    0,
    1444
  ]
}

```
