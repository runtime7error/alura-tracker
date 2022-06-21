<template>
  <CronometroTimer :tempoEmSegundos="tempoEmSegundos" />
  <PlayButton @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando"/>
  <StopButton @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTimer from "./CronometroTimer.vue";
import PlayButton from "./PlayButton.vue";
import StopButton from "./StopButton.vue";

export default defineComponent({
  name: "ButtonBar",
  emits: ["aoTemporizadorFinalizado"],
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
      }, 1000);
      this.cronometroRodando = true;
      console.log("iniciando Cronometro");
    },
    finalizar() {
      clearInterval(this.cronometro);
      this.cronometroRodando = false;
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
      console.log("finalizando Cronometro");
    }
  },
  components: {
    CronometroTimer,
    PlayButton,
    StopButton
  }
});

</script>
