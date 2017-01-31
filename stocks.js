// Best Time to Buy and Sell Stocks

// Write a function that takes in an array of integers representing the price of a stock on a given day.
// Assuming you can only perform one transaction per day (buy or sell a stock), find the maximum profit.

const maxStock = (arr) => {
  var low = Infinity;
  var high = -Infinity;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < low){
      low = arr[i]
    }
    if(arr[i] > high){
      high = arr[i];
    }
  }
  return high - low;
}