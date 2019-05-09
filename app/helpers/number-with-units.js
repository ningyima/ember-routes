import { helper } from '@ember/component/helper';

export function numberWithUnits(params/*, hash*/) {
  const [qty, unit] = params;
  if(qty === 1) {
    return `${qty} ${Ember.Inflector.inflector.singularize(unit)}`;
  } else {
    return `${qty} ${Ember.Inflector.inflector.pluralize(unit)}`;
  }
}

export default helper(numberWithUnits);
