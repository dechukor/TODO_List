export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  dateCreate: Date | null;
  dateDeadline: Date | null;
};

export type ColorsType = {
  darkGrey: string;
  lightGrey: string;
  green: string;
  yellow: string;
  orange: string;
  red: string;
  blue: string;
  primaryText: string;
};

export type FilterStateType = "all" | "active" | "completed";
