import { Notificacoes } from "@/interfaces/Notificacoes";
import Projeto from "@/interfaces/Projeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { OBTER_PROJETOS } from "./tipo-acoes";
import { ADICIONA_PROJETO, ALTERA_PROJETO, DEFINIR_PROJETOS, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import http from '@/http'

interface Estado {
  projetos: Projeto[],
  notificacoes: Notificacoes[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as Projeto;
      state.projetos.push(projeto);
    },
    [ALTERA_PROJETO](state, projeto: Projeto) {
      const index = state.projetos.findIndex((p) => p.id === projeto.id);
      state.projetos[index] = projeto;
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((p) => p.id !== id);
    },
    [DEFINIR_PROJETOS](state, PROJETOS: Projeto[]) {
      state.projetos = PROJETOS;
    },
    [NOTIFICAR](state, novaNotificacao: Notificacoes) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id !== novaNotificacao.id
        );
      }, 3000);
    }
  },

  actions: {
    [OBTER_PROJETOS] ({ commit }) {
      http.get('projetos')
      .then(response => commit(DEFINIR_PROJETOS, response.data))
    }
  }
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
