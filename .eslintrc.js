module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        "react-native/no-inline-styles": 0,
        "no-inline-styles": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["off"]
      },
    },
  ],
  extends: '@react-native',
};
