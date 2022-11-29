<template>
    <div class="box has-text-height-bold clicavel" @click="tarefaClidada">
        <div class="columns">
            <div class="column is-4">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'Tarefa sem projeto' }}
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
    emits: ['aoTarefaClicada'],
    components: {
        CronometroTimer
    }, 
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    methods: {
        tarefaClidada () : void {
            this.$emit('aoTarefaClicada', this.tarefa)
        }
    }
});
</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>