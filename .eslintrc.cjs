module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        react: { version: '18.2' }
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'off',
        'react/no-unknown-property': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off'
    },
}
