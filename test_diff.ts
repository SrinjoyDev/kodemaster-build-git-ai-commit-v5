import { getStagedDiff } from './src/git/diff';

(async () => {
  const output = await getStagedDiff();
  console.log('Staged changes:', output);
})();
