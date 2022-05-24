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
            <strong>00:00:00</strong>
          </section>
          <button class="button mr-2">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
          </button>
          <button class="button ml-2">
            <span class="icon">
              <i class="fas fa-pause"></i>
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
});
</script>
