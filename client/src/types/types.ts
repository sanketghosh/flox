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

export type DropdownBtn = "normal" | "danger";

export type EmployeeRole = "admin" | "editor" | "normal";
export type Employee = {
  name: string;
  email: string;
  role: EmployeeRole;
};
