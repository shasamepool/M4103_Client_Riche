import { helper } from '@ember/component/helper';

export default helper(function multiplie(params /*, hash*/) {
  const [prix, multiple] = params;
  let total = prix * multiple;
  return total;
});
