import { DocumentNode } from 'graphql/language/ast';
import { ApplicationConfig } from '../application/application-config';
import { hideLoader, showLoader } from '../application/application-loader';
import { SessionStore } from '../application/session-store';
/**
 * Factory utilizada para criar um client do graphql
 */
const createGraphql = () => {
  // opcoes do request
  const createOptions = () => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: SessionStore.user.token },
      body: '',
      signal: {} as AbortSignal,
    };
  };

  const trimQuery = (query: string) => {
    return query
      .replace(/#.*\n/g, '')
      .replace(/[\s|,]*\n+[\s|,]*/g, ' ')
      .replace(/:\s/g, ':')
      .replace(/,\s/g, ',')
      .replace(/\)\s\{/g, '){')
      .replace(/\}\s/g, '}')
      .replace(/\{\s/g, '{')
      .replace(/\s\}/g, '}')
      .replace(/\s\{/g, '{')
      .replace(/\)\s/g, ')')
      .replace(/\(\s/g, '(')
      .replace(/\s\)/g, ')')
      .replace(/\s\(/g, '(')
      .replace(/=\s/g, '=')
      .replace(/\s=/g, '=')
      .replace(/@\s/g, '@')
      .replace(/\s@/g, '@')
      .replace(/\s\$/g, '$')
      .replace(/\s\./g, '.')
      .trim();
  };
  return {
    async request<V>(gql: DocumentNode, variables: V) {
      // exibe o loader da aplicacao
      showLoader();
      const options = createOptions();
      // seta o timeout da conexao
      const abortController = new AbortController();
      const timeout = setTimeout(() => abortController.abort(), 10000);
      options.signal = abortController.signal;

      // monta o body do request
      const body = {
        query: trimQuery(gql.loc!.source.body),
        variables: variables,
      };
      options.body = JSON.stringify(body);

      console.log(options.body);

      try {
        // efetua a chama para a API
        const response = await fetch(ApplicationConfig.endpoint, options);
        const json = await response.json();

        // em caso de erro, lanca a excecao
        if (json.errors) {
          throw json.errors;
        } else {
          return json.data;
        }
      } catch (e) {
        if (e instanceof Error && ('AbortError' === e.name || 'TypeError' === e.name)) {
          throw new Error('Falha de conexão, favor tentar novamente mais tarde!');
        } else if (e instanceof Array) {
          throw e[0];
        } else {
          throw e;
        }
      } finally {
        // esconde o loader da aplicacao
        hideLoader();

        // limpa o timeout
        clearTimeout(timeout);
      }
    },
  };
};

/**
 * * Cria e exporta o client do graphql
 */
export const Graphql = createGraphql();
