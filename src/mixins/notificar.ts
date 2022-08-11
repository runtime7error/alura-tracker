import { TipoNotificacao } from "@/interfaces/Notificacoes";
import { NOTIFICAR } from "@/store/tipo-mutacoes";
import { store } from "@/store";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, título: string, texto: string): void {
      store.commit(NOTIFICAR, {
        titulo: título,
        texto: texto,
        tipo: tipo,
      });
    },
  },
};
