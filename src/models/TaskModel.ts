import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; // quando o timer chega ao final 
    interruptDate: number | null; // quando a task for interrompida 
    //type: "worktime" | "shortBreakTime" | "longBreakTime ";
    type: keyof TaskStateModel["config"]

}