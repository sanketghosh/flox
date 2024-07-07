import * as z from "zod";

// add column dialog schema
export const ColumnSchema = z.object({
  columnTitle: z
    .string()
    .nonempty("This field can't be empty.")
    .min(2, {
      message: "Column title must be of 2 characters at least.",
    })
    .max(20, {
      message: "Must contain less than 20 characters.",
    }),
});

// add new task dialog schema
export const TaskSchema = z.object({
  taskTitle: z
    .string()
    .min(2, {
      message: "Title must be of 2 characters at least.",
    })
    .max(20, {
      message: "Max 20 characters for task title.",
    }),
  taskPriority: z.string().min(1, {
    message: "Property type is required.",
  }),
  taskDescription: z.string().min(6, {
    message: "At least a description of 6 characters.",
  }),
});

// register form schema
export const RegisterSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "One character must for first name",
    }),
    lastName: z.string().min(2, {
      message: "Two characters must for last name",
    }),
    email: z.string().email({
      message: "A valid email is required.",
    }),
    password: z
      .string()
      .min(6, { message: "Password of at least 6 characters needed." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  });

//  login form schema
export const LoginSchema = z.object({
  email: z.string().email({
    message: "A valid email is required.",
  }),
  password: z.string().min(6, {
    message: "Your password does not contain 6 characters.",
  }),
});

// add workspace modal schema
export const WorkspaceSchema = z.object({
  emoji: z.string(),
  workspaceTitle: z
    .string()
    .min(1, {
      message: "Workspace title is a must.",
    })
    .max(30, {
      message: "Not more than 20 characters.",
    }),
  workspaceDescription: z
    .string()
    .min(10, {
      message: "Minimum 10 characters needed.",
    })
    .max(60, {
      message: "Not more than 50 characters.",
    }),
});
