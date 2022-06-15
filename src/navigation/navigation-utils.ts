import { HandlingList } from "../handling/handling-list";

/**
 * Factory para criar telas
 */
export const createNavigation = (
  name: string,
  component: () => JSX.Element
) => {
  return { name: name, component: component };
};
export type NavigationType = ReturnType<typeof createNavigation>;

/**
 * Navegacoes para todas as telas do sistema
 */
export const Navigations = {
  //Campo
  handlingList: createNavigation("handlingList", HandlingList),
};
