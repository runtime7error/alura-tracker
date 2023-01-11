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
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ButtonBar from "./ButtonBar.vue";
import { key } from "@/store";

export default defineComponent({
  name: "FormulárioPrincipal",
  emits: ["aoSalvarTarefa"],
  components: {
    ButtonBar,
  },
  setup(props, { emit }) {
    const store = useStore(key);
    const descricao = ref("");
    const idProjeto = ref("");
    const projetos = computed(() => store.state.projeto.projetos);

    const finalizarTarefa = (tempoDecorrido: number): void => {
      emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find((proj) => proj.id === idProjeto.value),
      });
      descricao.value = "";
    };

    return {
      projetos,
      descricao,
      idProjeto,
      finalizarTarefa,
    };
  },
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bgprimario);
}
</style>
