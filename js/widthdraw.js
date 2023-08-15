document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmountString = depositField.value;
  const depositAmount = parseInt(depositAmountString);
  //   console.log(depositAmount);

  const depositCart = document.getElementById("deposit");
  const depositCartString = depositCart.innerText;
  depositCart.innerText = depositAmount;
});
