<script>
    import DailyTasksContainer from './DailyTasksContainer.vue';
    import WeeklyTasksContainer from './WeeklyTasksContainer.vue';
    import MonthlyTasksContainer from './MonthlyTasksContainer.vue';
    import SearchTask from './SearchTask.vue';

    export default{
        name: 'AppMain',
        components: {
            DailyTasksContainer,
            WeeklyTasksContainer,
            MonthlyTasksContainer,
            SearchTask,
        },
        data(){
            return{

            }
        },
    }
</script>

<template>
    <main>
        <SearchTask></SearchTask>
        <div class="d-flex jst-cntr algn-cntr">
            <DailyTasksContainer></DailyTasksContainer>
            <WeeklyTasksContainer></WeeklyTasksContainer>
            <MonthlyTasksContainer></MonthlyTasksContainer>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use '../style/partials/_variables' as *;

main{
    background-color: $bg-color;
    min-height: calc(100vh - 205px);
}
</style>