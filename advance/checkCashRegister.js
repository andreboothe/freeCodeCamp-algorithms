/*--
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
--*/

function checkCashRegister(price, cash, cid) {
    const initial_change = cash - price;
    let change = cash - price;
    
    //reducer function to sum the entire cid
    const reducer = (accumulator, currentValue) => accumulator + currentValue[1];
    const total_cid = cid.reduce(reducer,0).toFixed(2);
    
    //object used as a reference for the value of each currency
    const val = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
      
    };
    
    //we want to start from the largest value and work down from there
    cid = cid.reverse();
    
    //reducer function that attempts to lower change until it reaches zero.
    const reducer2 = function(accumulator, currentValue){
      
      //reference the val object, 
      //if currency value is above change we cannot derive change from it.
      //therefore move on until we can.
      if(val[currentValue[0]] < change && change > 0){
        
        //if the amount in cid of that currency is <= change simply subtract the value.
        //else find out what is the maximum amount we can remove and subtract it,
        //allowing change to assume the remainder value.
        if((currentValue[1] <= change) && currentValue[1] != 0) {
          change = change - currentValue[1];
          accumulator.push(currentValue);
        }
        else if(currentValue[1] > change){
          
          let remainder = change  % val[currentValue[0]] ;
          let temp = change - remainder;
          
          accumulator.push([currentValue[0], temp]);
          change = remainder.toFixed(2);
        }
      }
      return accumulator;
    };
    
    const change_arr = cid.reduce(reducer2,[]);
    
    return ((total_cid == initial_change)? "Closed":
           ((total_cid < initial_change) ||(change > 0))? "Insufficient Funds":
           change_arr);
  
   
    
  }