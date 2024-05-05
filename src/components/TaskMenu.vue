<script>
    import {store} from '../store.js';

    export default{
        name: 'TaskMenu',
        data(){
            return{
                store,
                tasksRange: [
                    {
                        range: 'Daily',
                    },
                    {
                        range: 'Weekly',
                    },
                    {
                        range: 'Monthly',
                    },
                ]
            }
        },
        methods : {
            // Funzione che permette di cambiare la sezione attiva
            sectionActivate (index) {
                store.activeSection = index ;
            }
        }
    }
</script>

<template>
    <section class="tasks-menu d-flex flex-col algn-cntr">
        <!-- Genera una sezione per ogni elemento dentro l'array tasksRange  -->
        <!-- Al click dell'elemento cambia la sezione attiva -->
        <div @click="sectionActivate (index)" v-for="range, index in tasksRange" class="task-wrapper" :class="store.activeSection === index ? 'active' : ''">
            <i class="fa-solid fa-list-check"></i>
            <div>{{range.range}}</div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/_variables' as *;

section{
    border: 1px solid black;
    border-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    position: absolute;
    top: -1px;
    left: -81px;
    min-width: 80px;
    max-width: 80px;
    gap: 15px;
    padding: 15px 0;
    overflow-x: hidden;
    background-color: white;
    box-shadow: -0.5px 1px 1px 1px;
    .task-wrapper{
        text-align: center;
        &:nth-child(even){
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            width: 200px;
            padding: 10px 0;
        }
        i{
            font-size: 40px;
        }
    }
}
</style>