const CREDIT_CARD_CLASS = 'AccountItemCreditCard';
const BALANCE_CLASS = 'balanceValue';

function changeBalanceDisplays() {
   const creditCardViews = document.getElementsByClassName(CREDIT_CARD_CLASS);

   if (!creditCardViews || !creditCardViews.length) {
      return;
   }

   for (const creditCardView of creditCardViews) {
      const balances = creditCardView.getElementsByClassName(BALANCE_CLASS);

      if (!balances || !balances.length) {
         continue;
      }

      for (const balanceElement of balances) {
         const balanceRaw = balanceElement.innerHTML;

         let balanceParsed;
         try {
            balanceParsed = parseFloat(balanceRaw.replace(/,/g, '').replace('$', ''));
         } catch (e) {
            continue;
         }

         if (balanceParsed >= 0) {
            balanceElement.innerHTML = `Owed: ${balanceRaw}`;
         } else {
            balanceElement.innerHTML = `Credit: ${balanceRaw.replace('-', '')}`;
         }
      }
   }
}

changeBalanceDisplays();