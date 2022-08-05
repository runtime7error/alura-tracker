<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-flex-grow-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <div class="columns is-vcentered">
          <div
            class="is-flex-grow-5 is-align-items-center is-justify-content-space-between"
          >
            <input
              type="text"
              class="input"
              placeholder="Qual tarefa será inciada ?"
              v-model="descricao"
            />
          </div>
          <div class="column is-3">
            <div class="select">
              <select v-model="idProjeto">
                <option value="">Selecione o projeto</option>
                <option
                  :value="projeto.id"
                  v-for="projeto in projetos"
                  :key="projeto.id"
                >
                  {{ projeto.nome }}
                </option>
              </select>
            </div>
          </div>
          <ButtonBar @aoTemporizadorFinalizado="finalizarTarefa" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import ButtonBar from "./ButtonBar.vue";
import { key } from "@/store";

export default defineComponent({
  name: "FormulárioPrincipal",
  emits: ["aoSalvarTarefa"],
  components: {
    ButtonBar,
  },
  data() {
    return {
      descricao: "",
      idProjeto: ""
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find(proj => proj.id === this.idProjeto),
      });
      this.descricao = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos)
    };
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bgprimario);
}
</style>
