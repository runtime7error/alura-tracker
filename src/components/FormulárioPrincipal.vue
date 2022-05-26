<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-flex-grow-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <div
          class="columns"
        >
          <div class="is-flex-grow-5 is-align-items-center is-justify-content-space-between">
            <input
              type="text"
              class="input"
              placeholder="Qual tarefa será inciada ?"
              v-model="descricao"
            />
          </div>
          <ButtonBar @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonBar from './ButtonBar.vue';

export default defineComponent({
  name: "FormulárioPrincipal",
  components: {
    ButtonBar
  },
  data () {
    return {
      descricao: ''
    }
  },
  methods: {
    finalizarTarefa (tempoDecorrido: number) : void {
      console.log(`finalizando tarefa ${this.descricao} e o tempo foi de ${tempoDecorrido} em segundos.`);
      this.descricao = '';
    } 
  }
});
</script>
