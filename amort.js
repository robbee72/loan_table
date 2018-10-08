function getValues() {
  var balance = parseFloat(document.getElementById("principal").value);
  var interestRate = parseFloat(
    document.getElementById("interest").value / 100.0
  );
  var terms = parseInt(document.getElementById("terms").value);

  var div = document.getElementById("Result");

  div.innerHTML = "";

  var balanceValue = validateInputs(balance);
  var interestValue = validateInputs(interestRate);

  if (balanceValue && interestValue) {
    div.innerHTML += amort(balance, interestRate, terms);
  } else {
    div.innerHTML += "Please Check your inputs and retry - invalid values.";
  }
}

function amort(balance, interestRate, terms) {
  var monthlyRate = interestRate / 12;

  var payment =
    balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));

  var result =
    "Loan amount: $" +
    balance.toFixed(2) +
    "<br />" +
    "Interest rate: " +
    (interestRate * 100).toFixed(2) +
    "%<br />" +
    "Number of months: " +
    terms +
    "<br />" +
    "Monthly payment: $" +
    payment.toFixed(2) +
    "<br />" +
    "Total paid: $" +
    (payment * terms).toFixed(2) +
    "<br /><br />";

  result +=
    "<table border='1'><tr><th>Month #</th><th>Balance</th>" +
    "<th>Interest</th><th>Principal</th><th>Payment</th>";

  // The loop
  for (var count = 0; count < terms; ++count) {
    var interest = 0;
    var monthlyPrincipal = 0;

    result += "<tr align=center>";
    result += "<td>" + (count + 1) + "</td>";
    result += "<td> $" + balance.toFixed(2) + "</td>";
    interest = balance * monthlyRate;
    result += "<td> $" + interest.toFixed(2) + "</td>";
    monthlyPrincipal = payment - interest;
    result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";
    payment = monthlyPrincipal + interest;
    result += "<td> $" + payment.toFixed(2) + "</td>";
    result += "</tr>";
    balance = balance - monthlyPrincipal;
  }
  result += "</table>";
  return result;
}

function validateInputs(value) {
  if (value == null || value == "") {
    return false;
  } else {
    return true;
  }
}
