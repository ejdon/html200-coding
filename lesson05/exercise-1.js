function openBank () {

let input = "";
let balance = 1000;

do {
  input = prompt('Welcome! Please select how you would like to proceed:\nQ to quit\nW to withdraw\nD to deposit\nB to check balance');

    switch(input.toUpperCase()) {

      case 'Q':
            alert('Good bye.');
            break;

      case 'W': {
            let withdraw = prompt('Please select an amount to withdraw: '); {
            let currentWithdraw = Number(withdraw)
            let withdrawAmount = balance - currentWithdraw;
            balance = withdrawAmount;
            alert('Your new balance is: $' + balance);
           }
           break;
         }

      case 'B':
            alert('Your balance is: $' + balance);
            break;

      case 'D':
            let deposit = prompt('Please select an amount to deposit: '); {
            let currentDeposit = Number(deposit)
            let depositAmount = balance + currentDeposit;
            balance = depositAmount;
            alert('Your new balance is: $' + balance);
          }
            break;
          }
        }
    while(input.toUpperCase() != 'Q');
  }
