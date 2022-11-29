import { Notificacoes } from "@/interfaces/Notificacoes";
import Projeto from "@/interfaces/Projeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { CADASTRAR_PROJETO, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS, REMOVER_PROJETO } from "./tipo-acoes";
import { ADICIONAR_TAREFA, ADICIONA_PROJETO, ALTERA_PROJETO, DEFINIR_PROJETOS, DEFINIR_TAREFAS, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import http from '@/http'
import Tarefa from "@/interfaces/Tarefa";

interface Estado {
  projetos: Projeto[],
  notificacoes: Notificacoes[],
  tarefas: Tarefa[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: [],
    tarefas: []
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
    [DEFINIR_TAREFAS](state, tarefas: Tarefa[]) {
      state.tarefas = tarefas;
    },
    [ADICIONAR_TAREFA](state, tarefa: Tarefa) {
      state.tarefas.push(tarefa);
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
    [OBTER_PROJETOS] ({ commit }) {
      http.get('projetos')
      .then(response => commit(DEFINIR_PROJETOS, response.data))
    },
    [CADASTRAR_PROJETO] ({ commit }, nomeDoProjeto: string) {
      return http.post('projetos', {
        nome: nomeDoProjeto 
      })
      .then(response => commit(ADICIONA_PROJETO, response.data))
    },
    [ALTERA_PROJETO] ({ commit }, projeto: Projeto) {
      return http.put('projetos/${projeto.id}', projeto)
      .then(response => commit(ALTERA_PROJETO, response.data))
    },
    [REMOVER_PROJETO] ({ commit }, id: string) {
      return http.delete('projetos/${id}')
      .then(() => commit(EXCLUIR_PROJETO, id))
    },
    [OBTER_TAREFAS] ({ commit }) {
      http.get('tarefas')
      .then(response => commit(DEFINIR_TAREFAS, response.data))
    },
    [CADASTRAR_TAREFA] ({ commit },tarefa: Tarefa) {
      return http.post('tarefas', tarefa)
      .then(response => commit(ADICIONAR_TAREFA, response.data))
    },
  }
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
