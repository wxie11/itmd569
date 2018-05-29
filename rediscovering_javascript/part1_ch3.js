//Exercise 1
'use strict';

const amountAfterTaxes = function(amount, ...taxes)
{
    const computeTaxForAmount = function(tax)
    {
      return amount * tax / 100.0;
    };

    const totalValues = function(total, value)
    {
      return total + value;
    };

    return taxes.map(computeTaxForAmount).reduce(totalValues, amount).toFixed(2);
};

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount));
console.log(amountAfterTaxes(amount, fedTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax));

//Exercise 2
'use strict';

const purchaseItems = function(essential1, essential2, ...optionals)
{
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};

purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

purchaseItems(...mustHaves, ...andAlso);

//Exercise 3
'use strict';

const purchaseItems = function(essential1 = 'milk', essential2 = 'bread', ...optionals)
{
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};

const items = ['cheese', 'milk'];
purchaseItems('cheese'); //cheese, bread,
purchaseItems(...items); //cheese, milk,
purchaseItems(); //milk, bread,

//Exercise 4
'use strict';

const placeOrder = function(
  id, amount,
  shipping = (amount < 20 ? 5 : 10), 
  date = new Date()) {
    console.log(' shipping charge for id: ' + id + ' is $' + shipping + ' Date: ' + date.getDate());
  };

placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.30);
placeOrder(1, 25.20);
