<script>
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import AppFooter from './components/AppFooter.vue';

    export default {
        components: {
            AppHeader,
            AppMain,
            AppFooter,
        },
        data(){
            return{
                store,
            }
        },
    }
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
    @use './style/generic';
</style>