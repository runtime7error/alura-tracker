<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <barra-lateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <formulário-principal @aoSalvarTarefa="salvarTarefa($event)"/>
      <div class="lista">
        <BoxEmpty v-if="listaVazia" class="taskBox">
          <b>Não foram iniciadas tarefas </b>😢
        </BoxEmpty>
        <TarefaItem v-for="(tarefa, index) in tarefas " :key="index" :tarefa="tarefa" class="taskBox"/>
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
import BoxEmpty from "./components/EmptyBox.vue";

export default defineComponent({
  components: {
    BarraLateral,
    FormulárioPrincipal,
    TarefaItem,
    BoxEmpty
  },
  data() {
    return {
      tarefas: [] as Tarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaVazia () : boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa(tarefa: Tarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema (modoEscuro: boolean) {
      this.modoEscuroAtivo = modoEscuro;
    }
  },
  name: "App"
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bgprimario: #fff;
  --textoprimario: #051933;
  --box-bg: #a3ffbf;
  --hover-texto-primario: #051933;
  --bgsecundario: #a3ffbf;
}

main.modo-escuro {
  --bgprimario: #08083e;
  --texto-primario: #fff;
  --box-bg: #a3ffbf;
  --hover-texto-primario: #051933;
  --bgsecundario: #a3ffbf;
}

.conteudo {
  background-color: var(--bgprimario);
}

.taskBox {
  background-color: var(--box-bg);
  color: #051933;
}
</style>
