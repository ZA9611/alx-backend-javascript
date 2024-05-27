export default function taskBlock(trueOrFalse) {
  const task1 = false;
  const task2 = true;

  if (trueOrFalse) {
    const task1 = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task1, task2];
}
