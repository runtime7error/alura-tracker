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
          <section class="m-2">
            <strong>{{tempoDecorrido}}</strong>
          </section>
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

export default defineComponent({
  name: "FormulárioPrincipal",
  data () {
    return {
      tempoEmSegundos: 0
    };
  },
  computed: {
    tempoDecorrido () : string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19);
    }
  },
  methods: {
    iniciar () {
      setInterval(()=> {
        this.tempoEmSegundos+=1;
        console.log('tempoEmSegundos', this.tempoEmSegundos);
      }, 1000)
      console.log('iniciando Cronometro');
    },
    finalizar () {
      console.log('finalizando Cronometro');
    }
  }
});
</script>
