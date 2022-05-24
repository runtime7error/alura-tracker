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
            />
          </div>
          <CronometroTimer :tempoEmSegundos="tempoEmSegundos"/>
          <button class="button mr-2" @click="iniciar">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
          </button>
          <button class="button ml-2" @click="finalizar">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTimer from './CronometroTimer.vue';

export default defineComponent({
    name: "FormulárioPrincipal",
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0
        };
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
                console.log("tempoEmSegundos", this.tempoEmSegundos);
            }, 1000);
            console.log("iniciando Cronometro");
        },
        finalizar() {
            clearInterval(this.cronometro);
            console.log("finalizando Cronometro");
        }
    },
    components: { CronometroTimer }
});
</script>
