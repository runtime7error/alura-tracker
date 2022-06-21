<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <barra-lateral />
    </div>
    <div class="column is-three-quarter">
      <formulário-principal @aoSalvarTarefa="salvarTarefa($event)"/>
      <div class="lista">
        <TarefaItem v-for="(tarefa, index) in tarefas " :key="index" :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormulárioPrincipal from "./components/FormulárioPrincipal.vue";
import TarefaItem from "./components/TarefaItem.vue";
import Tarefa from "./interfaces/Tarefa";

export default defineComponent({
  components: {
    BarraLateral,
    FormulárioPrincipal,
    TarefaItem
  },
  data() {
    return {
      tarefas: [] as Tarefa[]
    }
  },
  methods: {
    salvarTarefa(tarefa: Tarefa) {
      this.tarefas.push(tarefa);
    }
  },
  name: "App"
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
