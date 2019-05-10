import { helper } from '@ember/component/helper';
import { singularize, pluralize } from 'ember-inflector';

export function numberWithUnits(params/*, hash*/) {
  const [qty, unit] = params;
  if(qty === 1) {
    return `${qty} ${singularize(unit)}`;
  } else {
    return `${qty} ${pluralize(unit)}`;
  }
}

export default helper(numberWithUnits);
