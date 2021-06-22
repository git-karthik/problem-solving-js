/**
 *
 * @param {*} targetVolume
 * @returns
 */
const solve = (targetVolume) => {
  const _minVolume = 200;

  if (targetVolume < _minVolume) {
    console.log(
      `Could not dispense volume ${targetVolume}ml less than the minimum dispensable limit`
    );
    return false;
  } else if (targetVolume % 2 == 0 && targetVolume % 5 == 0) {
    //this means the target volume is a multiple of 10
    console.log(`volume a multiple of 10`);
    return true;
  } else if (targetVolume % 5 == 0) {
    console.log(`volume a multiple of 5`);
    return true;
  }
  return false;
};

console.log(solve(505));
