<template>
  <div class="column is-three-quarter conteudo">
    <formulário-principal @aoSalvarTarefa="salvarTarefa($event)" />
    <div class="lista">
      <BoxEmpty v-if="listaVazia" class="taskBox">
        <b>Não foram iniciadas tarefas </b>😢
      </BoxEmpty>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Digite para filtrar"
            v-model="filtro"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div>
      <TarefaItem
        v-for="(tarefa, index) in tarefas"
        :key="index"
        :tarefa="tarefa"
        class="taskBox"
        @aoTarefaClicada="selecionarTarefa($event)"
      />
    </div>
    <Modal :mostrar="tarefaSelecionada != null">
      <template v-slot:cabecalho>
        <p class="modal-card-title">Editando uma tarefa</p>
        <button @click="fecharModal" class="delete" aria-label="close"></button>
      </template>
      <template v-slot:corpo>
        <div class="field">
          <label for="descricaoDaTarefa" class="label"> Descrição </label>
          <input
            type="text"
            class="input"
            v-model="tarefaSelecionada.descricao"
            id="descricaoDaTarefa"
          />
        </div>
      </template>
      <template v-slot:rodape>
        <button @click="alterarTarefa" class="button is-success">
          Salvar alterações
        </button>
        <button @click="fecharModal" class="button">Cancelar</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import FormulárioPrincipal from "../components/FormulárioPrincipal.vue";
import TarefaItem from "../components/TarefaItem.vue";
import BoxEmpty from "../components/EmptyBox.vue";
import Modal from "../components/Modal.vue";
import { OBTER_PROJETOS, OBTER_TAREFAS } from "@/store/tipo-acoes";
import { useStore } from "@/store";
import Tarefa from "@/interfaces/Tarefa";

export default defineComponent({
  components: {
    FormulárioPrincipal,
    TarefaItem,
    BoxEmpty,
    Modal,
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

    const filtro = ref("");

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value);
    });

    return {
      tarefas: computed(() => store.state.tarefas),
      store,
      filtro,
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
