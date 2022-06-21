<template>
    <div class="box has-text-height-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da Tarefa
            </div>
            <div class="column">
                <cronometro-timer :tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTimer from "./CronometroTimer.vue";

export default defineComponent({
    name: "TarefaItem",
    components: {
        CronometroTimer
    }
});
</script>

<style scoped>
.box {
    background: #afc1cd;
}
</style>