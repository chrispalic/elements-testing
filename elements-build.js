const fs  = require('fs');
const fsExtra = require('fs-extra');
const concat = require('concat');

const folderName = 'elements-testing';

(async function build() {
    const files = [
        `./dist/${folderName}/runtime.js`,
        `./dist/${folderName}/polyfills.js`,
        `./dist/${folderName}/scripts.js`,
        `./dist/${folderName}/main.js`,
    ]

    await fsExtra.ensureDir('elements')

    await concat(files, `elements/${folderName}.js`);

    await fsExtra.copyFile(`./dist/${folderName}/styles.css`, 'elements/styles.css')

    if (fs.existsSync(`./dist/${folderName}/assets/`)) {
      await fsExtra.copy(`./dist/${folderName}/assets/`, 'elements/assets/' )
    }
})()