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
    name: 'StopButton',
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
            this.$emit("clicado")
        }
    }
});
</script>