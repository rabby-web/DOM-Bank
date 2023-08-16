document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-filed");
  const withdrawFieldString = withdrawField.value;
  const newWithdrawAmount = parseFloat(withdrawFieldString);

  const withdrawTotalElement = document.getElementById("withdraw");
  const withdrawTotalElementString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(withdrawTotalElementString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentWithdrawBalance = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentWithdrawBalance;

  withdrawField.value = "";
});
