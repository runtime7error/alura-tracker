<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <barra-lateral />
    </div>
    <div class="column is-three-quarter">
      <formulário-principal />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormulárioPrincipal from "./components/FormulárioPrincipal.vue";

export default defineComponent({
  components: {
    BarraLateral,
    FormulárioPrincipal
  },
  name: "App"
});
</script>
