import { reactive } from "vue";
export const store = reactive({
    tasksDailyList: [
        {
            singleTask: 'Hai completato tutte le task!!!',
            visible: true,
        },
    ],
    tasksWeeklyList: [
        {
            singleWeeklyTask: 'Hai completato tutte le task!!!',
            visible: true,
        },
    ],
    tasksMonthlyList: [
        {
            singleMonthlyTask: 'Hai completato tutte le task!!!',
            visible: true,
        },
    ],
    activeSection: 0,
});