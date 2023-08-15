document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmountString = depositField.value;
  const depositAmount = parseFloat(depositAmountString);
  //   console.log(depositAmount);

  const depositTotalElement = document.getElementById("deposit");
  const depositTotal = depositTotalElement.innerText;
  const depositAmountTotal = parseFloat(depositTotal);

  const currentDepositTotal = depositAmount + depositAmountTotal;
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const total = previousBalanceTotal + depositAmountTotal;
  balanceTotalElement.innerText = total;
});
