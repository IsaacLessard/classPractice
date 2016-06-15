window.onload = function () {
  document.getElementById('numVal').addEventListener("keyup", calcTip)
  document.getElementById('tipPercentage').addEventListener("change", calcTip)
  //document.getElementsByClassName('calcButton')[0].addEventListener("click", calcTip)
  function calcTip (event) {
    var num = document.getElementById('numVal').value
    var tipPercentage = document.getElementById('tipPercentage').value
    num.indexOf('$') > -1 ? num = num.split('$')[1] : false
    var tip= (num* tipPercentage).toFixed(2)
    document.getElementsByClassName('showTip')[0].innerText = "You should tip $" + tip;
    //event.preventDefault();
  }

};
