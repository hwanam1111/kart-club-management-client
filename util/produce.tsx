import { produce, enableES5 } from 'immer';

function produceES5(...args) {
  enableES5();
  return produce(...args);
}

export default produceES5;
