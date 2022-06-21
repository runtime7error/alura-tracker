<template>
    <div class="box has-text-height-bold">
        <div class="columns">
            <div class="column is-7">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BoxEmpty"
});
</script>