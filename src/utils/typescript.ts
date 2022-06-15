/**
 * * Verifica se o objeto enviado como parametro tem a proprietade informada
 */
export const hasProperty = <O, P extends PropertyKey>(object: O, property: P): object is O & Record<P, unknown> => {
  if (object instanceof Object && Object.prototype.hasOwnProperty.call(object, property)) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  return false;
};
