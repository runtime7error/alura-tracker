<template>
  <header>
    <h1>
      <img
        src="https://i.kym-cdn.com/photos/images/original/002/333/575/2f2"
        alt="ranni"
        :class="ranniClass.ranni"
      />
      <!-- <button class="button" @click="alterarTema">
      </button> -->
      <span class="icon is-medium fas fa-2x" @click="alterarTema">
          <i class="fa-solid fa-moon darkIcon"></i>
      </span>
      <div></div>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscuro: false
    }
  },
  computed: {
    ranniClass() {
      return {
          "ranni": 'image is-fullwidth ranniGradient'
      };
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro;
      this.$emit("aoTemaAlterado", this.modoEscuro);
    }
  }
});

</script>

<style scoped>
header {
  /* Cores do fundo da ranni 
  background: #13102f;
  background: #afc1cd;
  background: #1d1664; */
  padding: 1rem;
  background: rgb(13,13,58);
  background: radial-gradient(0deg, rgba(29,22,100,1) 0%, rgba(19,16,47,1) 63%, rgba(175,193,205,1) 100%);
  width: 100%;
  height: 100vh;
  border-right: 1px solid rgb(183, 183, 183);
}

 .darkIcon {
    color: #fff;
  }

.ranniGradient {
  mask-image: radial-gradient(circle, rgba(19,16,47,1) 0%, rgba(19,16,47,0) 75%);
  -webkit-mask-image: radial-gradient(circle, rgba(19,16,47,1) 0%, rgba(19,16,47,0) 75%);
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }

  .ranniGradient {
    max-height: 350px;
    max-width: 350px;
    margin: auto;
  }
}
</style>