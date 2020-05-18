<template>
  <div id="app" class="m-u--app-body">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ajout">Ajout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// modul sass overrides here.
$m-font-path: "~@ulaval/modul-components/dist/assets/fonts/"; //this is required.

@import "~@ulaval/modul-components/dist/styles/main";
</style>
