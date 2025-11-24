const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SLATE_PKG_PATH = path.resolve(__dirname, '../packages/slate/package.json');
const SLATE_REACT_PKG_PATH = path.resolve(__dirname, '../packages/slate-react/package.json');

const originalSlatePkg = fs.readFileSync(SLATE_PKG_PATH, 'utf8');
const originalSlateReactPkg = fs.readFileSync(SLATE_REACT_PKG_PATH, 'utf8');

try {
  console.log('Mutating package.json files for @deepnote fork publication...');

  // 1. Mutate packages/slate/package.json
  const slatePkg = JSON.parse(originalSlatePkg);
  const slateVersion = slatePkg.version;
  slatePkg.name = '@deepnote/slate';
  fs.writeFileSync(SLATE_PKG_PATH, JSON.stringify(slatePkg, null, 2) + '\n');
  console.log(`Updated ${SLATE_PKG_PATH} name to @deepnote/slate`);

  // 2. Mutate packages/slate-react/package.json
  const slateReactPkg = JSON.parse(originalSlateReactPkg);
  slateReactPkg.name = '@deepnote/slate-react';
  
  const dependencyString = `npm:@deepnote/slate@${slateVersion}`;

  if (slateReactPkg.dependencies && slateReactPkg.dependencies.slate) {
    slateReactPkg.dependencies.slate = dependencyString;
  }
  if (slateReactPkg.peerDependencies && slateReactPkg.peerDependencies.slate) {
    slateReactPkg.peerDependencies.slate = dependencyString;
  }

  fs.writeFileSync(SLATE_REACT_PKG_PATH, JSON.stringify(slateReactPkg, null, 2) + '\n');
  console.log(`Updated ${SLATE_REACT_PKG_PATH} name to @deepnote/slate-react and dependencies`);

  // 3. Run changeset publish
  console.log('Running yarn changeset publish...');
  execSync('yarn changeset publish', { stdio: 'inherit' });

} catch (error) {
  console.error('Error during publish-fork script:', error);
  process.exit(1);
} finally {
  // 4. Restore original package.json files
  console.log('Restoring original package.json files...');
  fs.writeFileSync(SLATE_PKG_PATH, originalSlatePkg);
  fs.writeFileSync(SLATE_REACT_PKG_PATH, originalSlateReactPkg);
  console.log('Restoration complete.');
}
