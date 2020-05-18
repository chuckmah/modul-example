<template>
  <div class="home">
    <etudiant-formulaire />
  </div>
</template>

<script>
// @ is an alias to /src
import EtudiantFormulaire from "@/components/EtudiantFormulaire.vue";

export default {
  name: "Home",
  components: {
    EtudiantFormulaire
  }
};
</script>
