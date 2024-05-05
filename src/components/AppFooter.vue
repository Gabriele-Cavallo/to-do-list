<script>
    export default {
        name: 'AppFooter',
        data(){
            return {

            }
        },
    }
</script>

<template>
    <footer class="d-flex jst-cntr algn-cntr">
        <div>Made with ❤ by <a href="https://github.com/Gabriele-Cavallo?tab=repositories">Gabriele Cavallo</a></div>
    </footer>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *; 

footer{
    height: 65px;
    padding: 20px;
    background-color: grey;
    a{
        text-decoration: none;
    }
}
</style>