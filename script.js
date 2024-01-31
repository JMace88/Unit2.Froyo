// create promt for flavors - done
// take user input and turn into an array - done
// use a loop to iterate through flavors - done
// an object to keep count of how many
// orders for each flavor
// needs to count the number of each flavor from input
// need a function that returns an object
// consistent names
// console output changes based on user input
// flavors - vanilla,vanilla,vanilla,strawberry,coffee,coffee

const button = document.querySelector('button');

button.addEventListener('click', function () {
  let input = prompt(
    'List your order with each flavor separated by a comma.'
    );
  let customerOrder = input.split(',');
  console.log(customerOrder);
  console.table(flavorsOrdered(customerOrder));
});

function flavorsOrdered(arrayOrders) {
  const orderTotals = {};
  for (let i = 0; i < arrayOrders.length; i++) {
    // we need it to log flavors as keys and
    // qty of times counted as value.
    let currentFlavor = arrayOrders[i];
    if (orderTotals[currentFlavor] === undefined) {
      orderTotals[currentFlavor] = 1;
    } else {
      orderTotals[currentFlavor]++;
    }
  }
  return orderTotals;
}
