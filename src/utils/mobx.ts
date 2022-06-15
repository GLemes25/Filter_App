import { makeAutoObservable, runInAction, configure } from 'mobx';
import { useState } from 'react';
import * as Yup from 'yup';

/**
 * Efetua a configuracao do MOBX
 */
configure({
  enforceActions: 'never',
});

/**
 * Opcoes padroes do observable form
 */
const DefaultFormOptions = {
  // variavel que define se o formulario inteiro deve ser validado para cada mudanca
  validadeOnChange: false,
};

/**
 * * Factory utilizada para criar um novo formulario controlado pelo mobx
 */
const createObservableForm = <V>(
  formValues: V,
  schema?: ReturnType<typeof Yup.object>,
  formOptions?: Partial<typeof DefaultFormOptions>,
) => {
  // opcoes do formulario
  const options = { ...DefaultFormOptions, ...formOptions };

  // declara as variaveis touched e errors do formulario
  const errors = {} as { [K in keyof V]?: string };
  const touched = {} as { [K in keyof V]?: boolean };
  const focused = {} as { [K in keyof V]?: boolean };

  // inicializa os valores de touched e errors
  for (const key in formValues) {
    errors[key] = '';
    touched[key] = false;
    focused[key] = false;
  }

  // retorna o formulario observado pelo mobx
  return makeAutoObservable({
    // variaveis do formulario
    values: { ...formValues },
    errors: { ...errors },
    touched: { ...touched },
    focused: { ...focused },
    schema: schema,
    status: '',

    // gerencia quando um campo do formulario foi desfocado
    handleBlur(key: keyof V) {
      return () => {
        runInAction(() => {
          this.touched[key] = true;
          this.focused[key] = false;
          this.validateField(key);
        });
      };
    },

    // gerencia quando um campo do formulario foi focado
    handleFocus(key: keyof V) {
      return () => {
        runInAction(() => {
          this.focused[key] = true;
        });
      };
    },

    // gerencia as alteracoes em um campo do formulario
    handleChange(key: keyof V) {
      return (value: V[keyof V]) => {
        runInAction(() => {
          this.values[key] = value;
          this.touched[key] = true;
          this.validateField(key);
        });
      };
    },

    // operacao para validar os dados do formulario
    validate() {
      try {
        this.status = '';
        this.schema!.validateSync(this.values, { abortEarly: false });
        return true;
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          e.inner.forEach((error: Yup.ValidationError) => {
            this.touched[error.path as keyof V] = true;
            this.errors[error.path as keyof V] = error.message;
          });
          return false;
        }
      }
    },

    // operacao para validar um campo do formulario
    validateField(key: keyof V) {
      try {
        // define se valida o formulario todo no handleChange
        if (options.validadeOnChange) {
          // limpa os erros de todas as chaves
          Object.keys(errors).forEach((key) => {
            this.errors[key as keyof V] = '';
          });
          this.schema!.validateSync(this.values, { abortEarly: false });
        } else {
          // limpa o erro da chave a ser validada
          this.errors[key] = '';
          this.schema!.validateSyncAt(key as string, this.values);
        }
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          if (options.validadeOnChange) {
            e.inner.forEach((error: Yup.ValidationError) => {
              this.errors[error.path as keyof V] = error.message;
            });
          } else {
            this.errors[key] = e.message;
          }
        }
      }
    },

    // reseta o formulario para o estado inicial
    reset() {
      for (const key in formValues) {
        this.errors[key] = '';
        this.touched[key] = false;
        this.values[key] = formValues[key];
        this.status = '';
      }
    },
  });
};

/**
 * * Hook utilizado para retornar de maneira unica a instancia do observableForm
 */
export const useObservableForm = <V>(
  formValues: V,
  schema?: ReturnType<typeof Yup.object>,
  formOptions?: Partial<typeof DefaultFormOptions>,
) => {
  // utiliza o useState para verificar se o observable já foi criado
  const [created, setCreated] = useState(false);

  if (created) {
    // casa já tenha sido criado, chama o useState sem acionar a factory
    return useState({})[0] as ObservableFormType<V>;
  } else {
    // aciona a factory para criar o formulario
    setCreated(true);
    return useState(createObservableForm(formValues, schema, formOptions))[0] as ObservableFormType<V>;
  }
};

/**
 * * Types que representam o observableForm
 */
export type ObservableFormType<V> = {
  values: V;
  errors: { [K in keyof V]?: string | undefined };
  touched: { [K in keyof V]?: boolean | undefined };
  focused: { [K in keyof V]?: boolean | undefined };
  schema: ReturnType<typeof Yup.object>;
  status: string;
  handleBlur: (key: keyof V) => () => void;
  handleFocus: (key: keyof V) => () => void;
  handleChange: (key: keyof V) => (value: V[keyof V]) => void;
  validate: () => boolean;
  reset: () => void;
};

/**
 * * Factory utilizada para criar um novo state controlado pelo mobx
 */
export const createObservableState = <V extends Object, K extends keyof V>(stateValues: V) => {
  // retorna o estado observado pelo mobx
  return makeAutoObservable({
    ...stateValues,
    reset() {
      Object.keys(stateValues).forEach((key) => {
        (this as unknown as V)[key as K] = stateValues[key as K];
      });
    },
  });
};

/**
 * * Hook utilizado para retornar de maneira unica a instancia do observableState
 */
export const useObservableState = <V>(stateValues: V) => {
  // utiliza o useState para verificar se o observable já foi criado
  const [created, setCreated] = useState(false);

  if (created) {
    // case já tenha sido criado, chama o useState sem acionar a factory
    return useState({})[0] as ObservableStateType<V>;
  } else {
    // aciona a factory para criar o state
    setCreated(true);
    return useState(createObservableState(stateValues))[0] as ObservableStateType<V>;
  }
};

/**
 * * Types que representam o observableState
 */
export type ObservableStateType<V> = V & {
  reset: () => void;
};
