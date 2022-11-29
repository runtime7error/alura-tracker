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
        @aoTarefaClicada="selecionarTarefa($event)"
      />
    </div>
    <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editando uma Tarefa</p>
          <button
            @click="fecharModal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="descricaoDaTarefa" class="label"> Descrição da tarefa </label>
            <input
              type="text"
              class="input"
              v-model="tarefaSelecionada.descricao"
              id="descricaoDaTarefa"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="alterarTarefa">Salvar Alterações</button>
          <button @click="fecharModal" class="button">Cancelar</button>
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
  data() {
    return {
      tarefaSelecionada: null as Tarefa | null,
    };
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
    selecionarTarefa(tarefa: Tarefa) {
      this.tarefaSelecionada = tarefa;
    },
    fecharModal() {
      this.tarefaSelecionada = null;
    },
    alterarTarefa() {
      this.store.dispatch("ALTERAR_TAREFA", this.tarefaSelecionada);
      this.fecharModal();
    },
  },
  name: "App",
});
</script>
