import {MersenneTwister19937} from '../vendor/marsenne-twister';

function Mersenne() {
  const gen = new MersenneTwister19937();
  gen.initGenrand(new Date().getTime() % 1000000000);

  return {
    rand(max: number, min: number) {
      if (max === undefined) {
        min = 0;
        max = 32768;
      }
      return Math.floor(gen.genrandReal2() * (max - min) + min);
    },

    seed(S: number | number[]) {
      if (typeof S === 'number') {
        return gen.initGenrand(S);
      }
      if (Array.isArray(S)) {
        return gen.initByArray(S, S.length);
      }
    },

    unseed() {
      gen.initGenrand(new Date().getTime() % 1000000000);
    },
  };
}

export {Mersenne};
