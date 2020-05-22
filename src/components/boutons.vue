<template>
    <div class="button">
        <h3 class="m-u--h3">BOUTONS ET INDICATEURS</h3>

        <m-button icon-name="m-svg__close-clear">A MODUL Button</m-button>

        <m-icon name="m-svg__error" />
        <m-icon name="m-svg__information" />
        <m-icon name="m-svg__warning" />

        <m-add />
        <m-icon-button />
        <m-icon-file extension=".bmp" />
        <m-progress
            :indeterminate="true"
            :circle="true"
            value="67"
        ></m-progress>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MButton } from '@ulaval/modul-components';
import { MAdd } from '@ulaval/modul-components';
import { MIconButton } from '@ulaval/modul-components';
import { MIconFile } from '@ulaval/modul-components';
import { MProgress } from '@ulaval/modul-components';
import { MIcon } from '@ulaval/modul-components';

@Component({
    components: {
        'm-button': MButton,
        'm-add': MAdd,
        'm-icon-button': MIconButton,
        'm-icon-file': MIconFile,
        'm-progress': MProgress,
        'm-icon': MIcon,
    },
})
export default class Boutons extends Vue {}
</script>

<style scoped lang="scss"></style>
