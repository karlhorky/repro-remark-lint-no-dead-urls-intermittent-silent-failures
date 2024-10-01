/** @type {import('unified-engine').Preset} */
const config = {
  plugins: [
    'remark-mdx',
    [
      'remark-lint-no-dead-urls',
      {
        skipUrlPatterns: [
          'chrome://',
          'codesandbox-link://',
          'embedded-html-codesandbox://',
          'embedded-css-codesandbox://',
          'embedded-js-console-codesandbox://',
          'embedded-js-devtools-codesandbox://',
          'mailto:',
          'https://angel.co/newsletters',
          'https://archive.ph/',
          'https://figmatemplate.com/',
          'https://github.com/upleveled/answers',
          'https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma',
          'https://mobile.twitter.com',
          'https://pixabay.com/',
          'https://projecteuler.net/archives',
          'https://trends.google.com/',
          'https://twitter.com',
          'https://www.backblaze.com/cloud-backup.html',
          'https://www.cloudflare.com/learning/cdn/what-is-caching/',
          'https://www.glassdoor.at/Geh%C3%A4lter/wien-junior-software-developer-gehalt-SRCH_IL.0,4_IM1118_KO5,30.htm',
          'https://www.linkedin.com/jobs/',
          'https://www.pexels.com/',
          'https://www.udemy.com/courses/free/',
          'https://codesandbox.io/s/typescript-fundamentals-exercises-pkijz?file=/src/exercises/001-basic-types.ts',
        ],
      },
    ],
  ],
};

export default config;
