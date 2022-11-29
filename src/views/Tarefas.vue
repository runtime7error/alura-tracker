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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FormulárioPrincipal from "../components/FormulárioPrincipal.vue";
import TarefaItem from "../components/TarefaItem.vue";
import BoxEmpty from "../components/EmptyBox.vue";
import { OBTER_TAREFAS } from "@/store/tipo-acoes";
import { useStore } from "@/store";

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
    return {
      tarefas: computed(() => store.state.tarefas),
      store
    };
  },
  methods: {
    // salvarTarefa(tarefa: Tarefa) {
    //   this.tarefas.push(tarefa);
    // },
  },
  name: "App",
});
</script>