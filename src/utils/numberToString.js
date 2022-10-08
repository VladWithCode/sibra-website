export default function numberToString(
  n,
  { forceDecimals = false, places = 2, plain = false }
) {
  if (typeof parseFloat(p) !== 'number') return p;

  const [i, d] = (+p).toFixed(places).split('.');

  let resultInt = `${(+i).toLocaleString()}`;
  let resultDec = '';

  if (places > 0 || forceDecimals) {
    let zeroString = '';
    let decimals = forceDecimals && places === 0 ? '00' : d.slice(0, places);

    for (let i = 0; i < places; i++) {
      zeroString += '0';
    }

    if (decimals !== zeroString || forceDecimals) {
      resultDec += '.' + decimals;
    }
  }

  if (plain) return i + resultDec;

  return resultInt + resultDec;
}

export function priceToString(p) {
  if (typeof parseFloat(p) !== 'number') return p;

  const [i, d] = (+p).toFixed(2).split('.');

  return `${(+i).toLocaleString()}.${d || '00'}`;
}
