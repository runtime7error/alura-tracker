import { Notificacoes } from "@/interfaces/Notificacoes";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_TAREFAS } from "./tipo-acoes";
import { ADICIONAR_TAREFA, ALTERA_TAREFA, DEFINIR_TAREFAS, NOTIFICAR } from "./tipo-mutacoes";

import http from '@/http'
import Tarefa from "@/interfaces/Tarefa";
import { EstadoProjeto, projeto } from "./modulos/projeto";

export interface Estado {
  notificacoes: Notificacoes[],
  tarefas: Tarefa[],
  projeto: EstadoProjeto;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    notificacoes: [],
    tarefas: [],
    projeto: {
      projetos: []
    }
  },
  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: Tarefa[]) {
      state.tarefas = tarefas;
    },
    [ADICIONAR_TAREFA](state, tarefa: Tarefa) {
      state.tarefas.push(tarefa);
    },
    [ALTERA_TAREFA](state, tarefa: Tarefa) {
      const index = state.tarefas.findIndex((taref) => taref.id === tarefa.id);
      state.tarefas[index] = tarefa;
    },
    [NOTIFICAR](state, novaNotificacao: Notificacoes) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id !== novaNotificacao.id
        );
      }, 3000);
    },
  },

  actions: {
    [OBTER_TAREFAS] ({ commit }) {
      http.get('tarefas')
      .then(response => commit(DEFINIR_TAREFAS, response.data))
    },
    [CADASTRAR_TAREFA] ({ commit },tarefa: Tarefa) {
      return http.post('tarefas', tarefa)
      .then(response => commit(ADICIONAR_TAREFA, response.data))
    },
    [ALTERAR_TAREFA] ({ commit }, tarefa: Tarefa) {
      return http.put(`/tarefas/${tarefa.id}`, tarefa)
      .then(() => commit(ALTERA_TAREFA, tarefa))
    },
  },
  modules: {
    projeto
  }
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
