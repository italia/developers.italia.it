const commitlint = require('danger-plugin-conventional-commitlint').default;
const configConventional = require('@commitlint/config-conventional');

(async () => {
  const commitlintConfig = {
    severity: 'fail'
  };
  await commitlint(configConventional.rules, commitlintConfig);
})();
