<template>
  <div class="app-etudiantformulaire">
    <h1>This is the EtudiantForm Component</h1>
    <m-datepicker></m-datepicker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EtudiantFormulaire extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@ulaval/modul-components/dist/styles/commons";

.app-etudiantformulaire {
  background: $m-color--ul-blue;
}
</style>
