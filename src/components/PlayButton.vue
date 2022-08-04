<template>
  <button class="button mr-2" @click="clicar" :disabled="desabilitado">
    <span class="icon">
      <i :class="icone"></i>
    </span>
    <span>{{texto}}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'PlayButton',
    emits: ["clicado"],
    props: {
        desabilitado : {
            type: Boolean
        },
        icone: {
            type: String
        },
        texto: {
            type: String
        }
    },
    methods : {
        clicar() {
            this.$emit("clicado");
        }
    }
});
</script>

<style>
.button {
  background-color: var(--bgprimario);
  color: var(--texto-primario);
}

.button:hover {
    background-color: var(--bgsecundario);
    color: var(--hover-texto-primario);
}

.button:disabled {
    background-color: var(--bgprimario);
    color: var(--texto-primario);
    cursor: not-allowed;
}
</style>