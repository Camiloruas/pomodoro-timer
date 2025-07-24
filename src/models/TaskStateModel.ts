import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaing: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
