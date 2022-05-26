<template>
  <header>
    <h1>
      <img
        src="https://i.kym-cdn.com/photos/images/original/002/333/575/2f2"
        alt="ranni"
        :class="ranniClass.ranni"
      />
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  computed: {
    ranniClass() {
      if (window.innerHeight < 769) {
        return {
          "ranni": 'image'
        };
      }
      return {
          "ranni": 'image is-fullwidth ranniGradient'
      };
    }
  },
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