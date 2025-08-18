import type { TaskModel } from "./TaskModel";

export type TaskConfigModel = {
  workTime: number; //MainForm
  shortBreakTime: number; //MainForm
  longBreakTime: number; //MainForm
};

export type TaskStateModel = {
  tasks: TaskModel[]; // hitórico,  MainForm
  secondsRemaining: number; // Home, countDow, Histórico, MainForm, Botton
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // countDow, Histórico, MainForm, Botton
  currentCycle: number; // Home
  config: TaskConfigModel;
};
