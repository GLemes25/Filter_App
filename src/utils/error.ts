import { hasProperty } from './typescript';

/**
 * * Recupera a mensagem de erro da excecao
 */
export const errorMessage = (error: unknown) => {
  if (hasProperty(error, 'message') && typeof error.message === 'string') {
    return error.message;
  } else {
    return 'Ocorreu um erro desconhecido, favor tentar novamente mais tarde!';
  }
};
