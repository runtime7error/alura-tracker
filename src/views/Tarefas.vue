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
import { defineComponent } from "vue";
import FormulárioPrincipal from "../components/FormulárioPrincipal.vue";
import TarefaItem from "../components/TarefaItem.vue";
import Tarefa from "../interfaces/Tarefa";
import BoxEmpty from "../components/EmptyBox.vue";

export default defineComponent({
  components: {
    FormulárioPrincipal,
    TarefaItem,
    BoxEmpty,
  },
  data() {
    return {
      tarefas: [] as Tarefa[]
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: Tarefa) {
      this.tarefas.push(tarefa);
    },
  },
  name: "App",
});
</script>