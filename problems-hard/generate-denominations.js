const solve = (tenderValue) => {
  const _acceptedDenoms = [1, 2, 5, 10, 20, 50, 100, 500, 1000].sort(
    (a, b) => b - a
  );

  const _minDenom = _acceptedDenoms[_acceptedDenoms.length - 1];
  const _maxDenom = _acceptedDenoms[0];
  const denominations = [];
  if (tenderValue < _minDenom) {
    throw Error(`The given value ${tenderValue} cannot be tendered`);
  }
  const _optimalDenom = (val) => {
    if (val > _maxDenom) {
      return _maxDenom;
    } else {
      return _acceptedDenoms.find((denom) => val >= denom);
    }
  };

  const _generateOptimalDenominations = (tenderValue) => {
    if (tenderValue > 0) {
      const optimalDenom = _optimalDenom(tenderValue);

      const count = Math.floor(tenderValue / optimalDenom);
      denominations.push([optimalDenom, count]);
      _generateOptimalDenominations(tenderValue % optimalDenom);
    }
  };
  _generateOptimalDenominations(tenderValue);
  return denominations;
};

console.log(solve(54567));
