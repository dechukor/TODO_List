import { TaskType } from "./types";

export const tasksData: TaskType[] = [
  {
    id: "5121c4f1-03bf-48bf-9705-9dc97ab61a76",
    title: "Task #1",
    completed: false,
    dateCreate: new Date("2025-01-31"),
    dateDeadline: new Date("2025-02-01"),
  },
  {
    id: "62aabce1-8f64-4684-90b9-2b2310cf726a",
    title: "Task #2",
    completed: false,
    dateCreate: new Date("2025-01-31"),
    dateDeadline: null,
  },
  {
    id: "402ee516-6c42-4d16-a9a8-322069f5cf6e",
    title: "Task #3",
    completed: false,
    dateCreate: new Date("2025-02-01"),
    dateDeadline: new Date("2025-02-02"),
  },
  {
    id: "3b720eaf-163a-41c8-bc5e-b47f2370fd0c",
    title: "Task #4",
    completed: false,
    dateCreate: new Date("2025-02-01"),
    dateDeadline: new Date("2025-02-03"),
  },
  {
    id: "3b720eaf-163a-41c8-bc5e-b4752370cd0c",
    title: "Task #5",
    completed: true,
    dateCreate: new Date("2025-02-01"),
    dateDeadline: new Date("2025-02-09"),
  },
];
