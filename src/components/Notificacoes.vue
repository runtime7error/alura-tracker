<template>
  <div class="notificacoes">
    <article
      class="message"
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">
        <strong>{{ notificacao.titulo }}</strong>
      </div>
      <div class="message-body">
        {{ notificacao.texto }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/interfaces/Notificacoes";

export default defineComponent({
  name: "NotificacoesComponente",
  data () {
    return {
        contexto: {
            [TipoNotificacao.SUCESSO]: 'is-success',
            [TipoNotificacao.ATENCAO]: 'is-warning',
            [TipoNotificacao.FALHA]: 'is-danger',
        }
    }
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 25%;
  width: 300px;
  padding: 8px;
  z-index: 999;
}
</style>
