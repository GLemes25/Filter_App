/**
 * Factory para criacao de Enums
 */
const createEnum = <E extends Object>(enumeration: E) => {
  return {
    ...enumeration,
    // dada uma string, retorna o enum
    item(key: string) {
      const item = enumeration[key as keyof E] as unknown;
      return item as EnumType;
    },

    // retorna todos os itens do enum
    all() {
      return Object.keys(enumeration).map((key) => {
        return enumeration[key as keyof E];
      });
    },
  };
};

// enum do sexo do gado
export const HerdGenderEnum = createEnum({
  male: { value: 'male', label: 'Macho' },
  female: { value: 'female', label: 'Fêmea' },
  mixed: { value: 'mixed', label: 'Misto' },
});

// enum da raça do gado
export const HerdBreedEnum = createEnum({
  nellore: { value: 'nellore', label: 'Nelore' },
  anelorado: { value: 'anelorado', label: 'Anelorado' },
  crossbreed: { value: 'crossbreed', label: 'Cruzamento Industrial' },
  others: { value: 'others', label: 'Outros (descrever)' },
});

// enum da categoria do gado
export const HerdCategoryEnum = {
  ...createEnum({
    bezerro: {
      value: 'bezerro',
      label: 'Bezerro',
      gender: HerdGenderEnum.male,
      inicialAge: 0,
      finalAge: 12,
    },
    bezerra: {
      value: 'bezerra',
      label: 'Bezerra',
      gender: HerdGenderEnum.female,
      inicialAge: 0,
      finalAge: 12,
    },
    bezerroBezerra: {
      value: 'bezerroBezerra',
      label: 'Bezerro / Bezerra',
      gender: HerdGenderEnum.mixed,
      inicialAge: 0,
      finalAge: 12,
    },
    garrote: {
      value: 'garrote',
      label: 'Garrote',
      gender: HerdGenderEnum.male,
      inicialAge: 13,
      finalAge: 24,
    },
    novilha: {
      value: 'novilha',
      label: 'Novilha',
      gender: HerdGenderEnum.female,
      inicialAge: 13,
      finalAge: 24,
    },
    garroteNovilha: {
      value: 'garroteNovilha',
      label: 'Garrote / Novilha',
      gender: HerdGenderEnum.mixed,
      inicialAge: 13,
      finalAge: 24,
    },
    boi: {
      value: 'boi',
      label: 'Boi Jovem',
      gender: HerdGenderEnum.male,
      inicialAge: 25,
      finalAge: 36,
    },
    vaca: {
      value: 'vaca',
      label: 'Novilha / Vaca',
      gender: HerdGenderEnum.female,
      inicialAge: 25,
      finalAge: 36,
    },
    boiVaca: {
      value: 'boiVaca',
      label: 'Boi / Vaca',
      gender: HerdGenderEnum.mixed,
      inicialAge: 25,
      finalAge: 36,
    },
    boiErado: {
      value: 'boiErado',
      label: 'Boi Erado',
      gender: HerdGenderEnum.male,
      inicialAge: 36,
      finalAge: Infinity,
    },
    vacaErada: {
      value: 'vacaErada',
      label: 'Novilha / Vaca Erada',
      gender: HerdGenderEnum.female,
      inicialAge: 36,
      finalAge: Infinity,
    },
    boiVacaErados: {
      value: 'boiVacaErados ',
      label: 'Boi / Vaca Erados',
      gender: HerdGenderEnum.mixed,
      inicialAge: 36,
      finalAge: Infinity,
    },
  }),

  // extende o enum adicionando uma regra para busca
  itemByRule(gender: string, averageAge: string | number) {
    if (!gender || !averageAge) {
      return;
    } else {
      return this.all().find((item) => {
        if (
          Number(averageAge) >= item.inicialAge &&
          Number(averageAge) <= item.finalAge &&
          gender === item.gender.value
        ) {
          return true;
        }
      });
    }
  },
};

// enum com tipos de manejo
export const HandlingTypeEnum = createEnum({
  others: { value: 'others', label: 'Outros' },
  supply: { value: 'supply', label: 'Fornecimento' },
  weighing: { value: 'weighing', label: 'Pesagem' },
});

// enum da condicao do cocho
export const FeederConditionEnum = createEnum({
  clean: { value: 'clean', label: 'Limpo' },
  little: { value: 'little', label: 'Pouco' },
  much: { value: 'much', label: 'Muito' },
  wet: { value: 'wet', label: 'Molhado' },
});

export type EnumType = {
  value: string;
  label: string;
};
