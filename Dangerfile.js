const commitlint = require('danger-plugin-conventional-commitlint').default;
const configConventional = require('@commitlint/config-conventional');

(async () => {
  const commitlintConfig = {
    severity: 'warn',
  };
  await commitlint(configConventional.rules, commitlintConfig);
})();
