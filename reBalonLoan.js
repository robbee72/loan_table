// FV = PV(1 + r) ^ (n - P * (((1 + r) ^ (n - 1)) / r));
var PV = 100000;
var r = 0.05;
var P = 12;
var n = 30;

function FV(r, n, P) {
  var pvif, FV;

  pvif = Math.pow(1 + r, n - P) ;
  FV= (r / (pvif - 1)) * -(P * pvif);

  return FV;
}

console.log(
  FV(
    r / 100 / P,
    P * n,
    - PV
  ).toFixed(2)
);
