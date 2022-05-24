<template>
  <CronometroTimer :tempoEmSegundos="tempoEmSegundos" />
  <button class="button mr-2" @click="iniciar" :disabled="cronometroRodando">
    <span class="icon">
      <i class="fas fa-play"></i>
    </span>
    <span>Play</span>
  </button>
  <button class="button ml-2" @click="finalizar" :disabled="!cronometroRodando">
    <span class="icon">
      <i class="fas fa-stop"></i>
    </span>
    <span>Stop</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTimer from './CronometroTimer.vue';

export default defineComponent({
    name: "ButtonBar",
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
                console.log("tempoEmSegundos", this.tempoEmSegundos);
            }, 1000);
            this.cronometroRodando = true;
            console.log("iniciando Cronometro");
        },
        finalizar() {
            clearInterval(this.cronometro);
            this.cronometroRodando = false;
            console.log("finalizando Cronometro");
        }
    },
    components: { CronometroTimer }
});
</script>
