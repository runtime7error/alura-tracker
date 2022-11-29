<template>
  <div class="column is-three-quarter conteudo">
    <formulário-principal @aoSalvarTarefa="salvarTarefa($event)" />
    <div class="lista">
      <BoxEmpty v-if="listaVazia" class="taskBox">
        <b>Não foram iniciadas tarefas </b>😢
      </BoxEmpty>
      <TarefaItem
        v-for="(tarefa, index) in tarefas"
        :key="index"
        :tarefa="tarefa"
        class="taskBox"
      />
    </div>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FormulárioPrincipal from "../components/FormulárioPrincipal.vue";
import TarefaItem from "../components/TarefaItem.vue";
import BoxEmpty from "../components/EmptyBox.vue";
import { OBTER_PROJETOS, OBTER_TAREFAS } from "@/store/tipo-acoes";
import { useStore } from "@/store";
import Tarefa from "@/interfaces/Tarefa";

export default defineComponent({
  components: {
    FormulárioPrincipal,
    TarefaItem,
    BoxEmpty,
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
  },
  methods: {
    salvarTarefa(tarefa: Tarefa) {
      this.store.dispatch("CADASTRAR_TAREFA", tarefa);
    },
  },
  name: "App",
});
</script>
