/**
 * Operacoes auxiliares para listagens
 */
export const ListUtil = {
  // Retorna uma lista filtrada conforme valores e chaves informadas
  filter<V>(list: V[], filter: string, keys: (keyof V)[]) {
    return list.filter((item) => {
      for (let i = 0; i < keys.length; i++) {
        if (
          !filter ||
          String(item[keys[i] as keyof V])
            .toUpperCase()
            .indexOf(filter.toUpperCase()) >= 0
        ) {
          return item;
        }
      }
    });
  },
};
