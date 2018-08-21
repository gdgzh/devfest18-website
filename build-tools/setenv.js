const fs = require('fs');

const branch = process.argv.reverse()[0].trim();
if (branch !== 'develop' && branch !== 'master') throw new Error(`Invalid branch name ${branch}`)
console.log(`Updating config for branch ${branch}`)

const hoverboardFilePath = 'data/hoverboard.config.json';
const hoverboardConfig = JSON.parse(fs.readFileSync(hoverboardFilePath).toString());

const envFilePath = `data/firebase-${branch}.config.json`;
const firebaseConfig = JSON.parse(fs.readFileSync(envFilePath).toString());
hoverboardConfig['firebase'] = firebaseConfig;
fs.writeFileSync(hoverboardFilePath, `${JSON.stringify(hoverboardConfig, null, 2)}\n`);
