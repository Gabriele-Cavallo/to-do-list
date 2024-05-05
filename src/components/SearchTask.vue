<script>
    import {store} from '../store.js';

    export default{
        name: 'SearchTask',
        data(){
            return {
                store,
                searchedTask: '',
            }
        },
        methods: {
            searchTask(activeSection){
                if(activeSection === 0){
                    store.tasksDailyList.forEach(singleTask => {
                        if (this.searchedTask === ''){
                            singleTask.visible = true;
                        }else if(singleTask.singleTask.toLowerCase().includes(this.searchedTask.toLowerCase())) {
                            singleTask.visible = true;
                        }else{
                            singleTask.visible = false;
                        }
                    });
                } else if(activeSection === 1){
                    store.tasksWeeklyList.forEach(singleTask => {
                        if (this.searchedTask === ''){
                            singleTask.visible = true;
                        }else if(singleTask.singleWeeklyTask.toLowerCase().includes(this.searchedTask.toLowerCase())) {
                            singleTask.visible = true;
                        }else{
                            singleTask.visible = false;
                        }
                    });
                }else {
                    store.tasksMonthlyList.forEach(singleTask => {
                        if (this.searchedTask === ''){
                            singleTask.visible = true;
                        }else if(singleTask.singleMonthlyTask.toLowerCase().includes(this.searchedTask.toLowerCase())) {
                            singleTask.visible = true;
                        }else{
                            singleTask.visible = false;
                        }
                    });
                }
            }
        },
    }
</script>

<template>
    <div class="input-wrapper d-flex jst-cntr algn-cntr">
        <input @keyup="searchTask(store.activeSection)" v-model="this.searchedTask" type="text" placeholder="Search Task">
    </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/_variables' as *;

.input-wrapper{
    width: 60%;
    margin: 0 auto;
    padding: 20px 0 0;
    input{
        border-radius: 15px;
        height: 40px;
        width: 50%;
        border: 1px solid black;
        padding-left: 15px;
    }
}
</style>