import Projeto from "@/interfaces/Projeto";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
  projetos: Projeto[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [
      {
        id: new Date().toISOString(),
        nome: "projeto 1",
      },
      {
        id: new Date().toISOString(),
        nome: "projeto 2",
      },
      {
        id: new Date().toISOString(),
        nome: "projeto 3",
      },
    ],
  },
});
