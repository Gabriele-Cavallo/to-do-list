import { reactive } from "vue";
export const store = reactive({
    tasksDailyList: [
        {
        singleTask: 'Hai completato tutte le task!!!',
        },
    ],
    tasksWeeklyList: [
        {
        singleWeeklyTask: 'Hai completato tutte le task!!!',
        },
    ],
    tasksMonthlyList: [
        {
        singleMonthlyTask: 'Hai completato tutte le task!!!',
        },
    ],
    activeSection: 0,
});