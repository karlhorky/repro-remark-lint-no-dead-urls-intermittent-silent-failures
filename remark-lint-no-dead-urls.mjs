/** @type {import('unified-engine').Preset} */
const config = {
  plugins: [
    'remark-mdx',
    'remark-lint',
    'remark-lint-no-dead-urls',
  ],
};

export default config;
