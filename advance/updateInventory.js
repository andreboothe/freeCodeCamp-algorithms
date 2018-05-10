/*--
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
--*/

function updateInventory(arr1, arr2) {
    
    //reduces both old and new stock to a list of stock item names.
    const reducer = (accumulator, currentVal) => accumulator.concat(currentVal[1]);
    const old_stock = arr1.reduce(reducer,[]);
    const new_stock = arr2.reduce(reducer,[]);
   
    //a union of of both old and new stock item names,
    //which is then sorted alphabetically.
    let union_stock = [];
    union_stock = union_stock.concat(old_stock);
    new_stock.map(function(e){
      if(union_stock.indexOf(e) < 0){
        union_stock.push(e);
      }
    });
    union_stock.sort();  
  
    //traverse the union of the stock items an retrieve their value from each array,
    //and by using their respective values psuh a new stock item.
    const updated_stock = union_stock.map(function(stock){
      let old_index = old_stock.indexOf(stock);
      let new_index = new_stock.indexOf(stock);
      
      if(old_index >= 0 && new_index >= 0){
        return [arr1[old_index][0] + arr2[new_index][0],
                stock];
      }
      else if(old_index >= 0 && new_index < 0){
        return arr1[old_index];
      }
      else {
        return arr2[new_index];
      }
      
    });  
  
    return updated_stock;
}