<script>
    import { TransitionGroup } from 'vue';
    import { store } from '../store.js';
    import TaskMenu from './TaskMenu.vue';

    export default{
        name: 'WeeklyTasksContainer',
        components:{
            TaskMenu,
        },
        data(){
            return{
                store,
                newTask: '',
                emptyTask: true,
            }
        },
        methods : {
            // Funzione che permette di aggiungere nuove task o mostrare un messaggio info se le task sono esaurite
            addWeeklyTask () {
                if (store.tasksWeeklyList[0].singleWeeklyTask === 'Hai completato tutte le task!!!'){
                    store.tasksWeeklyList.splice(0, 1);
                    this.emptyTask = false;
                }
                let addNewTask = {
                    singleWeeklyTask: this.newTask,
                    visible: true,
                };
                store.tasksWeeklyList.unshift(addNewTask);
                this.newTask = '';
            },
            // Funzione che permette di togliere dalla lista la task selezionata
            deleteWeeklyTask(index){
                store.tasksWeeklyList.splice(index, 1);
                if (store.tasksWeeklyList.length <= 0){
                    let addNewTask = {
                        singleWeeklyTask: 'Hai completato tutte le task!!!',
                        visible: true,
                    };
                    store.tasksWeeklyList.push(addNewTask);
                    this.emptyTask = true;
                    this.newTask = '';
                }
            },
        },
    }
</script>

<template>
    <!-- Mostra la sezione solo le viene selezionato il "bottone" corrispondente -->
    <section v-if="store.activeSection === 1" class="container">
        <TaskMenu></TaskMenu>
        <h2>WEEKLY TASKS</h2>
        <div class="input-wrapper">
            <!-- Premendo il tasto enter aggiunge alla lista la nuova task tramite la funzione addWeeklyTask -->
            <input @keyup.enter="addWeeklyTask()" type="text" v-model="newTask" placeholder="Inserire qui la nuova task">
        </div>
        <transition-group name="list" tag="ul" mode="in-out" appear>
            <!-- Per ogni task all'interno dell'array tasksWeeklyList crea un list item da mostrare a schermo -->
            <!-- Aggiunge la classe hidden se il valore visible dell'object è false e ci sono task nell'array -->
            <li v-for="task, index in store.tasksWeeklyList" :key="task" :class="!task.visible && !emptyTask ? 'hidden' : ''" class="tasks-wrapper d-flex jst-btwn algn-cntr">
                <div :class="emptyTask === true ? 'txt-cntr' : ''" class="single-tasks">{{ task.singleWeeklyTask }}</div>
                <!-- Se ci sono task nell'array mostra il bottone per cancellare la task -->
                <button v-if="!emptyTask" @click="deleteWeeklyTask(index)">
                    <i class="fa-solid fa-rectangle-xmark"></i>
                </button>
            </li>
        </transition-group>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/_variables' as *;

.container{
    width: 60%;
    min-height: 800px;
    border-radius: 15px;
    border-top-left-radius: 0px;
    box-shadow: 1px 1px 2px 2px;
    position: relative;
    padding: 20px;
    background-color: grey;
    margin: 20px 0;
    h2{
        text-align: center;
        margin-bottom: 10px;
        color: white;
        font-size: 40px;
        text-shadow: 1px 1px 1px black;
    }
    .input-wrapper{
        width: 60%;
        margin: 0 auto 20px;
        input{
            height: 60px;
            border-radius: 15px;
            width: 100%;
            border: 2px solid black;
            padding: 0px 15px;
            font-size: 20px;
        }
    }
    ul{
        position: relative;
        .tasks-wrapper{
            border: 1px solid black;
            margin: 10px auto;
            width: 60%;
            background-color: $bg-color;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 1px 1px 1px 1px;
            font-size: 20px;
            button{
                margin-left: 10px;
                background-color: transparent;
                border: none;
                i{
                    font-size: 25px;
                }
            }
        }
    }
}
</style>