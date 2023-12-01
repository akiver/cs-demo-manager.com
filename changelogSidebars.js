// @ts-check

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('./changelog');
const versions = files
  .filter((filename) => {
    return filename !== 'unreleased.mdx';
  })
  .map((filename) => {
    return path.parse(filename).name;
  })
  .sort()
  .reverse();

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  changelog: [
    'unreleased',
    {
      type: 'category',
      label: 'Versions',
      collapsed: false,
      items: versions,
    },
  ],
};
