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
