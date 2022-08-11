<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <barra-lateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <notificacoes></notificacoes>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default defineComponent({
  components: {
    BarraLateral,
    Notificacoes
},
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  methods: {
    trocarTema(modoEscuro: boolean) {
      this.modoEscuroAtivo = modoEscuro;
    },
  },
  name: "App",
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bgprimario: #fff;
  --textoprimario: #051933;
  --box-bg: #a3ffbf;
  --hover-texto-primario: #051933;
  --bgsecundario: #a3ffbf;
}

main.modo-escuro {
  --bgprimario: #04041f;
  --texto-primario: #fff;
  --box-bg: #a3ffbf;
  --hover-texto-primario: #051933;
  --bgsecundario: #a3ffbf;
}

.conteudo {
  background-color: var(--bgprimario);
}

.taskBox {
  background-color: var(--box-bg);
  color: #051933;
}
</style>
