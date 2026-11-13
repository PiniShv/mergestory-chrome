// The store rejects a package whose manifest names a missing file, and the two versions must agree.
const assert = require('node:assert');
const fs = require('node:fs');
const manifest = require('./manifest.json');
const pkg = require('./package.json');

assert.equal(manifest.version, pkg.version, 'manifest.json and package.json versions differ');
const files = [
  ...Object.values(manifest.icons),
  ...manifest.content_scripts.flatMap((s) => s.js),
  ...manifest.web_accessible_resources.flatMap((r) => r.resources),
  // player.html loads this one; the manifest does not name it.
  'player.js',
];
const packaged = pkg.scripts.package.split(' ');
for (const file of files) {
  assert.ok(fs.existsSync(file), `${file} is missing`);
  assert.ok(
    packaged.includes(file) || packaged.includes(file.split('/')[0]),
    `${file} is not in the package`,
  );
}
console.log('ok');
