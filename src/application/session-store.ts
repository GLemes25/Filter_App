import { makeAutoObservable } from "mobx";

/**
 * Define a store da sessao do usuario
 */
const createSessionStore = () => {
  return makeAutoObservable({
    // propriedades
    // user: {} as UserType,
  });
};
export const SessionStore = createSessionStore();
