import type { Config } from "@level-ci/cli";

export default {
 organization: 'level-ci-5675092793706394-levelaccess-com-uglnb',
 project: 'level-ci-playwright-sample-github-1ry',
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 override: {
    'feature-d': {
    scope: 'delta',
    targetBranch: 'feature-c'
    },
    },
 reportPaths: ['./level-ci-reports']
} satisfies Config;