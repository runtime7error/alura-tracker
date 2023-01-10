import http from "@/http";
import Projeto from "@/interfaces/Projeto";
import { Estado } from "@/store";
import {
  ALTERA_PROJETO,
  OBTER_PROJETOS,
  CADASTRAR_PROJETO,
  REMOVER_PROJETO,
} from "@/store/tipo-acoes";
import {
  ADICIONA_PROJETO,
  EXCLUIR_PROJETO,
  DEFINIR_PROJETOS,
} from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoProjeto {
  projetos: Projeto[];
}

export const projeto: Module<EstadoProjeto, Estado> = {
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
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      return http
        .get("projetos")
        .then((response) => commit(DEFINIR_PROJETOS, response.data));
    },
    [CADASTRAR_PROJETO]({ commit }, nomeDoProjeto: string) {
      return http
        .post("projetos", { nome: nomeDoProjeto })
        .then((response) => commit(ADICIONA_PROJETO, response.data));
    },
    [ALTERA_PROJETO]({ commit }, projeto: Projeto) {
      return http
        .put(`/projetos/${projeto.id}`, projeto)
        .then((response) => commit(ALTERA_PROJETO, response.data));
    },
    [REMOVER_PROJETO]({ commit }, id: string) {
      return http
        .delete(`/projetos/${id}`)
        .then(() => commit(EXCLUIR_PROJETO, id));
    },
  },
};
