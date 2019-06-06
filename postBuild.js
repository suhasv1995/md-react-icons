const fs = require('fs');
const path = require('path');

const packageJson = {
  name: 'md-react-icons',
  version: '0.0.1',
  description:
    'Material design icons as SVGs for React, with ZERO dependencies',
  main: 'index.js',
  scripts: {},
  repository: {
    type: 'git',
    url: 'git+https://github.com/suhasv1995/md-react-icons.git',
  },
  author: 'Suhas V <suhasv1995@gmail.com>',
  license: 'MIT',
  bugs: {
    url: 'https://github.com/suhasv1995/md-react-icons/issues',
  },
  homepage: 'https://github.com/suhasv1995/md-react-icons#readme',
  devDependencies: {},
  peerDependencies: {
    react: '*',
    'prop-types': '*',
  },
};

fs.writeFileSync(
  path.resolve(__dirname, 'dist', 'package.json'),
  JSON.stringify(packageJson, null, 2)
);
