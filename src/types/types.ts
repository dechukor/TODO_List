export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  dateCreate: Date | null;
  dateDeadline: Date | null;
};
