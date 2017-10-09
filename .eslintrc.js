module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'prettier',
        'prettier/react',
    ],
    plugins: ['react', 'jsx-a11y', 'import', 'promise'],
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true,
    },
    settings: {
        'import/resolver': 'webpack'
    },
    globals: {
        snap: true,
        shallow: true,
    },
    rules: {
        eqeqeq: 2,
        'consistent-this': [2, 'self'],
        'no-var': 2,
        'no-console': 0,
        'no-debugger': 2,
        'prefer-const': [2, { destructuring: 'all' }],
        'prefer-template': 2,
        'no-cond-assign': [2, 'always'],
        'valid-typeof': [
            2,
            {
                requireStringLiterals: true,
            },
        ],
        'no-empty-pattern': 2,
        'no-throw-literal': 2,
        'no-useless-call': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
        'func-names': 2,
        'arrow-body-style': [2, 'as-needed'],
        // disallow certain object properties
        'no-restricted-properties': [
            2,
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'dot-notation': 2,
        'no-useless-return': 2,
        'no-else-return': 2,
        'no-return-await': 2,
        'prefer-promise-reject-errors': 2,
        radix: 2,
        'handle-callback-err': 2,
        'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        'no-undef-init': 2,
        'spaced-comment': [2, 'always'],

        'import/order': [2, { groups: [['builtin', 'external'], 'internal'] }],
        'import/newline-after-import': 0,
        'import/prefer-default-export': 0,
        'import/unambiguous': 0,
        'import/no-amd': 2,
        'import/no-unresolved': [
            2,
            {
                commonjs: true,
                caseSensitive: true,
            },
        ],
        'import/no-named-as-default': 2,
        'import/no-named-as-default-member': 2,
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    'test/**',
                    '**/*-test.js',
                    '**/*-story.js',
                    '**/webpack.config.js',
                ],
                optionalDependencies: false,
            },
        ],
        'import/no-mutable-exports': 2,
        'import/first': [2, 'absolute-first'],
        'import/no-duplicates': 2,
        // 'import/extensions': [2, 'always', { js: 'never' },],
        'import/no-absolute-path': 2,
        'import/no-dynamic-require': 2,
        'import/no-webpack-loader-syntax': 2,
        'import/no-named-default': 2,

        'react/forbid-prop-types': [
            2,
            {
                forbid: ['any', 'array', 'object'],
            },
        ],
        'react/jsx-boolean-value': [2, 'never'],
        'react/jsx-no-bind': [
            2,
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        'react/jsx-no-duplicate-props': [
            2,
            {
                ignoreCase: true,
            },
        ],
        'react/jsx-pascal-case': [
            2,
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/no-danger': 1,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': [
            2,
            {
                ignoreStateless: true,
            },
        ],
        'react/prefer-es6-class': [2, 'always'],
        'react/self-closing-comp': 2,
        'react/no-unused-prop-types': [
            2,
            {
                skipShapeProps: true,
            },
        ],
        'react/style-prop-object': 2,
        'react/no-array-index-key': 2,
        'react/display-name': 2,
        'react/no-string-refs': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'react/require-default-props': 0,
        'react/no-unescaped-entities': 0,
        'react/sort-comp': [
            1,
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'react/boolean-prop-naming': 2,

        // Possibly nice addition for keyboard accesiblity
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/mouse-events-have-key-events': 0,
        'jsx-a11y/interactive-supports-focus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        // Screenreader support
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/no-onchange': 0,
        'jsx-a11y/anchor-is-valid': 0,

        'promise/catch-or-return': 0,
        'promise/always-return': 0,
    },
};
