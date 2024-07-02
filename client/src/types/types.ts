export type ID = string | number;

export type Column = {
  id: ID;
  title: string;
};

export type Priority = "high" | "medium" | "low";

export type Card = {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: Priority;
};
