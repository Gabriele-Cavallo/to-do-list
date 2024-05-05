<script>
    export default{
        name: 'AppHeader',
        data(){
            return{

            }
        },
    }
</script>

<template>
    <header class="d-flex jst-cntr algn-cntr">
        <div class="logo-wrapper d-flex algn-cntr">
            <img src="../assets/img/logo.png" alt="logo">
            <h1>MY TO-DO LIST</h1>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/_variables' as *;

header{
    padding: 30px;
    background-color: grey;
    .logo-wrapper{
        gap: 20px;
        img{
            max-height: 80px;
        }
    }
}
</style>