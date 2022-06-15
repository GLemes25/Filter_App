import { makeAutoObservable } from 'mobx';

/**
 * Define a store com as informacoes da UI
 */
const createUIStore = () => {
  return makeAutoObservable({
    // propriedades
    connected: false,
    param: {} as unknown,
  });
};
export const UIStore = createUIStore();
