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
    <nav class="panel mt-5">
      <ul class="is-size-7">
        <li>
          <router-link to="/" class="link">
            <span class="icon is-medium fas fa-2x">
              <i class="fas fa-tasks"></i>
            </span>
            <span class="ml-2">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <span class="icon is-medium fas fa-2x">
              <i class="fas fa-project-diagram"></i>
            </span>
            <span class="ml-2">Projetos</span>
          </router-link>
        </li>
      </ul>
    </nav>
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
.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}
</style>