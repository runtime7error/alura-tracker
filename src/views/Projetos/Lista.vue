<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Projeto</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`">
              <span class="icon is-small">
                <i class="fas fa-edit"></i>
              </span>
            </router-link>
            <button class="button is-small ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { OBTER_PROJETOS, REMOVER_PROJETO } from "@/store/tipo-acoes";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ProjetosLista",
  methods: {
    excluir(id: string) {
      this.store.dispatch(REMOVER_PROJETO, id);
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(OBTER_PROJETOS);
    return {
      projetos: computed(() => store.state.projeto.projetos),
      store
    };
  },
});
</script>
