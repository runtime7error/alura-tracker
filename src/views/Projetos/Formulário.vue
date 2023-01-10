<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ALTERA_PROJETO } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/Notificacoes";
import useNotificador from "@/hooks/notificador";
import { CADASTRAR_PROJETO } from "@/store/tipo-acoes";

export default defineComponent({
  name: "FormsPage",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projeto.projetos.find(
        (proj) => proj.id === this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.dispatch(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        }).then(() => {
          this.onSucess();
        });
      } else {
        this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto).then(() => {
          this.onSucess();
        });
      }
    },
    onSucess() {
      this.nomeDoProjeto = "";
          this.notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'Projeto salvo com sucesso!');
          this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()

    return {
      store,
      notificar
    };
  },
});
</script>
