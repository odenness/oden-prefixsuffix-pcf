module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-console": "off"
  },
  "ignorePatterns": [
    "generated/**/*",
    "out/**/*",
    "node_modules/**/*",
    "**/*.ts",
    "**/*.d.ts"
  ]
};
