<template>
    <div class="box has-text-height-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao}}
            </div>
            <div class="column">
                <cronometro-timer :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroTimer from "./CronometroTimer.vue";
import ITarefa from "../interfaces/Tarefa";

export default defineComponent({
    name: "TarefaItem",
    components: {
        CronometroTimer
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
});
</script>

<style scoped>
.box {
    background: #afc1cd;
}
</style>