import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, named*/) {
  let [values, symbol] = params;
  return values + ' ' + symbol;
});
