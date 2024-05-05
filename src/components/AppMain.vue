<script>
    import DailyTasksContainer from './DailyTasksContainer.vue';
    import WeeklyTasksContainer from './WeeklyTasksContainer.vue';
    import MonthlyTasksContainer from './MonthlyTasksContainer.vue';

    export default{
        name: 'AppMain',
        components: {
            DailyTasksContainer,
            WeeklyTasksContainer,
            MonthlyTasksContainer,
        },
        data(){
            return{

            }
        },
    }
</script>

<template>
    <main class="d-flex jst-cntr algn-cntr">
        <DailyTasksContainer></DailyTasksContainer>
        <WeeklyTasksContainer></WeeklyTasksContainer>
        <MonthlyTasksContainer></MonthlyTasksContainer>
    </main>
</template>

<style scoped lang="scss">
    @use '../style/partials/_variables' as *;

main{
    background-color: $bg-color;
    min-height: calc(100vh - 205px);
}
</style>