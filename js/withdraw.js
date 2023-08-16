document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-filed");
  const withdrawFieldString = withdrawField.value;
  const newWithdrawAmount = parseFloat(withdrawFieldString);

  const withdrawTotalElement = document.getElementById("withdraw");
  const withdrawTotalElementString = withdrawTotalElement.innerText;
});
