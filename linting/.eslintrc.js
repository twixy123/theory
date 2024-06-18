module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser", // Обязательный параметр что бы typescript parser работал и не ругался на vue шаблоны
  plugins: [
    "@typescript-eslint",
    "custom-plugin"
  ],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "plugin:prettier/recommended",
    "plugin:vue/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json", // внутри tsconfig в поле include указать данный файл ( .eslintrc.js ), что бы работал @typescript-eslint/parser со всеми опциями
  },
  rules: {
    /*
     * !!!!!!!!!!!!
     * Включить в вашей IDE автоматический fix при сохранении файла
     * В WebStorm ( Languages & Frameworks › JavaScript › Code Quality Tools › ESLint › fix on save )
     * Отключить форматирование по prettier в IDE
     * В WebStorm ( Languages & Frameworks › JavaScript › Prettier › Убрать галочку "Fix on save" )
     *
     * */
    "custom-plugin/disallow-boolean": "error",

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-duplicate-imports": "error", // не дублировать импорты
    indent: ["error", 2], // отступы в 2 пробела
    quotes: ["error", "double"], // Использовать только двойные ковычки
    semi: ["error", "always"], // всегда надо ставить точку с запятой
    "no-unexpected-multiline": "error", // Запретить запутанные многострочные выражения
    "comma-dangle": ["error", "always-multiline"], // всегда нужно ставить запятую
    "getter-return": "error", // get всегда должен возращать данные
    "no-async-promise-executor": "error", // нельзя использовать асинхронные callback функции в new Promise
    "no-await-in-loop": "error", // Запретить await внутри циклов
    "no-class-assign": "error", // Запретить переназначение членов класса
    "no-fallthrough": "error", // Запретить провал операторов случая
    "arrow-body-style": ["error", "as-needed"], // Не требовать фигурные скобки вокруг тел функций стрелок
    camelcase: [
      // Применять соглашение об именах в camelcase
      "error",
      {
        properties: "always", // обеспечивает использование camelcase для имен свойств
        ignoreDestructuring: true, // не проверяет деструктурированные идентификаторы (но все же проверяет любое использование этих идентификаторов позже в коде)
        ignoreImports: false, // обеспечивает соблюдение стиля Camelcase для импорта
        ignoreGlobals: false, // применяет стиль CamelCase для глобальных переменных
      },
    ],
    "capitalized-comments": ["off"], // Принудительно использование заглавной буквы первой буквы комментария.
    "consistent-this": ["error", "that"], // согласованное именования при захвате текущего контекста выполнения.
    curly: ["error", "multi"], // нельзя что бы в блоке было только одно действие
    eqeqeq: ["error", "always"], // Требует использования === и !==
    "guard-for-in": "error", // Требовать, чтобы циклы for-in включали оператор if
    "init-declarations": ["error", "always"], // Требовать инициализацию в объявлениях переменных
    "max-params": ["error", 3], // максимальное количество параметров в функции = 3
    "no-else-return": "error", // Запретить блоки else после операторов return в операторах if
    "no-var": "error", // let или const вместо var
    "no-unused-vars": "off", // Отключить ловлю неиспользоваемые переменные, установленно правило через TS
    "sort-imports": [
      // Принудительно выполнять сортированные объявления импорта внутри модулей
      "error",
      {
        ignoreCase: true, // правило игнорирует чувствительность к регистру локального имени импорта.
        ignoreDeclarationSort: false, // применять сортировку к любому типу импортиремой сущности
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "multiple", "single", "all"],
        allowSeparatedGroups: false, // правило проверяет сортировку операторов объявления импорта НЕ только для тех, которые появляются в последовательных строках.
      },
    ],
    "sort-keys": "warn", // предупреждение сортировки ключей объекта
    yoda: ["error", "never"], // Должно быть if (color === "red"), но не if ("red" === color)
    "space-before-function-paren": ["error", "never"], // space before "()" in function
    "space-before-blocks": ["error", "always"], // space before {}
    "space-in-parens": ["error", "never"], // без интервалов внутри круглых скобок
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "import",
        next: "export",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["throw", "return", "function", "debugger"],
      },
      {
        blankLine: "always",
        prev: "debugger",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like",
      },
    ],
    "no-multiple-empty-lines": [
      // Запретить несколько пустых строк
      "error",
      {
        max: 1, // обеспечивает максимальное количество последовательных пустых строк.
        maxEOF: 1, // обеспечивает максимальное количество последовательных пустых строк в конце файлов.
        maxBOF: 0, // обеспечивает максимальное количество последовательных пустых строк в начале файлов.
      },
    ],
    "default-param-last": ["error"], // параметры по умолчанию последними
    "key-spacing": [
      //  расстояние между ключами и значениями в литеральных свойствах объекта.
      "error",
      {
        beforeColon: false, // запрещает пробелы между ключом и двоеточием в литералах объекта.
        afterColon: true, // требуется хотя бы один пробел между двоеточием и значением в литералах объекта.
        mode: "strict", // обеспечивает ровно один пробел до или после двоеточия в объектных литералах.
      },
    ],
    "keyword-spacing": [
      // одинаковый интервал до и после ключевых слов.
      "error",
      {
        before: true, // перед ключевыми словами требуется хотя бы один пробел
        after: true, // требуется хотя бы один пробел после ключевых слов
      },
    ],
    "operator-linebreak": [ // Местоположение обрыва строки перед операторами
      "error",
      "after",
      {
        "overrides": {
          "?": "before",
          ":": "before",
          "&&": "before",
          "||": "before",
        }
      }
    ],
    "space-unary-ops": [ // постоянный интервал до или после унарных операторов. ( например, декремент и инкремент )
      "error",
      {
        "words": true, // применяется к операторам унарных слов, таким как: new, delete, typeof, void, yield
        "nonwords": false, // не применяется к унарным операторам, таким как: -, +, --, ++, !, !!
      }
    ],
    "space-infix-ops": "error", // Требовать пробелы вокруг инфиксных операторов ">", "<", "+" ( 1 + 2 ), "*" ...
    "no-extra-boolean-cast": [ // Запретить ненужные логические приведения
      "off"
    ],
    //
    // TYPESCRIPT
    //
    "@typescript-eslint/type-annotation-spacing": [
      // должен быть пробел перед объявлением типа
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error", // Требовать, чтобы сигнатуры перегрузки функции были последовательными.
    "@typescript-eslint/array-type": [
      // Всегда используйте Array<T> или ReadonlyArray<T> для всех типов массивов.
      "error",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"], // разрешить только Record<string, any> в одиночном типе
    "@typescript-eslint/consistent-type-imports": [
      // использовать type при импорте типов
      "error",
      {
        disallowTypeAnnotations: false,
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/default-param-last": "error", // параметры по умолчанию последними.
    "@typescript-eslint/explicit-function-return-type": "error", // Требуйте явных типов возвращаемых значений для функций и методов класса.
    "@typescript-eslint/explicit-module-boundary-types": [
      // Требовать явные типы возвращаемых значений и аргументов для методов открытого класса экспортируемых функций и классов.
      "error",
      {
        allowArgumentsExplicitlyTypedAsAny: true, // разрешить явный any
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      // разделение ключей в интерфейсах
      "error",
      {
        multiline: {
          delimiter: "semi", // каждый член должен быть разделен точкой с запятой (;).
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
        multilineDetection: "last-member", // если последний элемент интерфейса находится на той же строке, что и последняя скобка, он считается одной строкой.
      },
    ],
    "@typescript-eslint/naming-convention": [
      // соглашения об именах для всего в базе кода.
      "error",
      {
        selector: "interface", // названия интерфейсов должны начинаться с I
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      {
        selector: ["variable", "classProperty", "parameter", "parameterProperty", "objectLiteralProperty", "typeProperty", "typeProperty", "accessor"],
        types: ["boolean"], // Булевые значения должны начинаться с "is", "are", "may" или "can"
        format: ["PascalCase"],
        prefix: ["is", "are", "may", "can"],
      },
      {
        selector: ["function"],
        format: ["camelCase"],
        filter: {
          regex: "^(?!(.*)?(a|A)dapter).*", // функции которые имеют в названии adapter должны начинаться со слова adapter
          match: false,
        },
        custom: {
          regex: "^adapter([A-Z][a-z0-9]+)+",
          match: true,
        },
      },
      {
        selector: ["function"],
        format: ["camelCase"],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      },
    ],
    //
    // VUE
    //
    "vue/multi-word-component-names": [
      // Требовать, чтобы имена компонентов всегда состояли из нескольких слов.
      "error",
      {
        ignores: [],
      },
    ],
    "vue/no-async-in-computed-properties": "error", // Запретить асинхронные действия в computed
    "vue/no-arrow-functions-in-watch": "off", // Не запрещать использование стрелочных функций для вотчеров
    "vue/no-child-content": [
      // Не запрещать дочернее содержимое элемента, которое будет перезаписано такой директивой, как v-html или v-text.
      "off",
    ],
    "vue/no-mutating-props": [
      // запретить мутировать props
      "error",
    ],
    "vue/no-unused-components": "error", // Запретить регистрацию компонентов, которые не используются внутри шаблонов.
    "vue/no-unused-vars": "off", // Запретить неиспользуемые определения переменных директив v-for или атрибутов области действия.
    "vue/no-use-v-if-with-v-for": "error", // Запретить использование v-if для того же элемента, что и v-for
    "vue/no-v-text-v-html-on-component": "warn", // Предупреждать v-text/v-html на компоненте
    "vue/require-v-for-key": "error", // Требовать v-bind:key с директивами v-for
    "vue/return-in-computed-property": [
      // наличие оператора return в computed
      "error",
      {
        treatUndefinedAsUnspecified: false, // запрещает неявный возврат неопределенного значения с помощью оператора return.
      },
    ],
    "vue/valid-define-emits": "error", // нужен defineEmits VUE3
    "vue/valid-define-props": "error", // нужен defineProps VUE3
    "vue/valid-template-root": "error", // Обеспечить действительный корень шаблона
    "vue/valid-v-else-if": "error", // Обеспечить v-if перед v-else-if
    "vue/valid-v-else": "error", // Обеспечить v-if перед v-else
    "vue/no-multiple-template-root": "error", // Запретить добавление в шаблон нескольких корневых узлов
    "vue/no-v-for-template-key": "error", // Запретить key атрибут в <template v-for>
    "vue/attribute-hyphenation": ["error", "always"], // аттрибуты должны быть в kebab-case
    "vue/component-definition-name-casing": ["error", "PascalCase"], // названия компонентов в PascalCase
    "vue/custom-event-name-casing": [
      // использовать специальный регистр для имени пользовательского события
      "error",
      "kebab-case",
    ],
    "vue/first-attribute-linebreak": [
      // расположение первого атрибута
      "error",
      {
        singleline: "beside", // Однострочный тэг - Запрещает перевод новой строки перед первым атрибутом.
        multiline: "below", // Многострочный тэг - Требуется новая строка перед первым атрибутом.
      },
    ],
    "vue/html-closing-bracket-newline": [
      // Требовать разрыв строки перед закрывающими скобками тега
      "error",
      {
        singleline: "never", // Однострочный тэг - Запрещает перевод строки перед закрывающими скобками тега
        multiline: "always", // Многострочный тэг - Требует перевод строки перед закрывающими скобками тега
      },
    ],
    "vue/html-closing-bracket-spacing": [
      // Требовать или запрещать пробел перед закрывающими скобками тега
      "error",
      {
        startTag: "never", // Настройка > открывающих тегов (например, <div>).
        endTag: "never", // Настройка > закрывающих тегов (например, </div>).
        selfClosingTag: "always", // Setting for the /> of self-closing tags (e.g. <div />)
      },
    ],
    "vue/max-attributes-per-line": [
      // максимум аттрибутов в линию
      "error",
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/html-self-closing": [
      // самозакрывающийся стиль
      "error",
      {
        html: {
          void: "always", // Стиль известных элементов HTML void. e.g. <br />
          normal: "always", // Стиль известных элементов HTML, за исключением элементов void.
          component: "always", // Стиль пользовательских компонентов Vue.js.
        },
        svg: "always", // Стиль известных элементов SVG.
        math: "always", // Стиль известных элементов MathML.
      },
    ],
    "vue/singleline-html-element-content-newline": [
      // Требовать разрыв строки до и после содержимого однострочного элемента
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: false,
      },
    ],
    "vue/multiline-html-element-content-newline": [
      // Требовать разрыв строки до и после содержимого многострочного элемента
      "error",
      {
        ignoreWhenEmpty: false,
        allowEmptyLines: false,
      },
    ],
    "vue/html-end-tags": "error", // запрет отсутствия закрывающих тегов.
    "vue/html-indent": [
      // согласованность отступов в <template>
      "error",
      2, // Если это число, это количество пробелов для одного отступа. Если это «табуляция», для одного отступа используется одна табуляция.
      {
        attribute: 1, // Множитель отступа для атрибутов
        baseIndent: 1, // Множитель отступа для операторов верхнего уровня.
        closeBracket: 0, // Множитель отступа для закрывающих скобок.
        alignAttributesVertically: true, // атрибуты должны быть выровнены по вертикали по первому атрибуту в многострочном случае
        ignores: [],
      },
    ],
    "vue/html-quotes": [
      "error",
      "double",
      { avoidEscape: true }, // позволяет строкам использовать одинарные или двойные кавычки, если строка содержит кавычку, которую в противном случае пришлось бы экранировать.
    ],
    "vue/mustache-interpolation-spacing": ["error", "always"], // один пробел между выражением и фигурными скобками в template.
    "vue/no-multi-spaces": "error", // Запретить несколько пробелов
    "vue/no-spaces-around-equal-signs-in-attribute": "error", // Запретить пробелы вокруг знаков равенства в атрибуте
    "vue/prop-name-casing": ["error", "camelCase"], // использование определенного регистра для prop
    "vue/require-default-prop": "error", // Требовать значение по умолчанию для prop
    "vue/require-prop-types": "error", // Требовать определения типов в prop
    "vue/v-bind-style": [
      // Применить стиль директивы v-bind
      "error",
      "shorthand", // требует использования сокращений.
    ],
    "vue/v-on-style": [
      // Применить стиль директивы v-on
      "error",
      "shorthand", // требует использования сокращений.
    ],
    "vue/v-slot-style": [
      // Применить стиль директивы v-slot
      "error",
      {
        atComponent: "v-slot", // Стиль слота по умолчанию непосредственно в пользовательских компонентах (например, <myComponent v-slot="">).
        default: "shorthand", // Стиль слота по умолчанию в оболочках шаблонов (например, <template #default="">).
        named: "shorthand", // Стиль для именованных слотов (например, <template #named="">).
      },
    ],
    "vue/attributes-order": [
      // порядок атрибутов
      "error",
      {
        order: [
          "DEFINITION", // e.g. 'is', 'v-is'
          "LIST_RENDERING", // e.g. 'v-for item in items'
          "CONDITIONALS", // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          "RENDER_MODIFIERS", // e.g. 'v-once', 'v-pre'
          "GLOBAL", // e.g. 'id'
          ["UNIQUE", "SLOT"], // [('ref', 'key'), ('v-slot', 'slot')]
          "TWO_WAY_BINDING", // e.g. 'v-model'
          "OTHER_DIRECTIVES", // e.g. 'v-custom-directive'
          "OTHER_ATTR", //  e.g. 'v-bind:prop="foo"', ':prop="foo"', 'prop="foo"', 'custom-prop="foo"', 'boolean-prop'
          "CONTENT", // e.g. 'v-text', 'v-html'
          "EVENTS", // e.g. '@click="functionCall"', 'v-on="event"'
        ],
        alphabetical: false,
      },
    ],
    "vue/no-lone-template": "error", // Запретить ненужный <template>
    "vue/no-v-html": "warn", // разрешить использование v-html
    "vue/order-in-components": [
      // Обеспечить порядок свойств в компонентах
      "error",
      {
        order: [
          // https://v2.vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "LIFECYCLE_HOOKS",
          ["template", "render"],
          "renderError",
          "methods",
          "watch",
          "watchQuery",
        ],
      },
    ],
    "vue/this-in-template": "error", // Запретить использование этого в шаблоне
    "vue/component-name-in-template-casing": [
      // Использование определенного регистра для стиля именования компонентов в шаблоне.
      "error",
      "PascalCase", // соответствие имен тегов регистру Паскаля
      {
        registeredComponentsOnly: true, // проверяются только зарегистрированные компоненты (в PascalCase)
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
      },
    },
  ],
  ignorePatterns: [
    "node_modules",
    ".eslintrc.js"
  ]
};

// ✅булевые переменные должны нчнаться с is
// методы обработчики должны или начинаться с on или заканчиваться с handler
// ✅переменные должны быть в camelCase
// ✅двойные ковычки
// ✅в конце запятую
// Вместо Boolean использовать !!
// ✅&& и || должны начинаться с новой строки если больше двух условий
// ✅унарный оператор "?" | ":" писать с начала новой строки
// ✅адаптеры должны начинаться со слова adapter
// ✅пробел перед и после if
