import { API_BASE_URL } from "@/constants";
import { WorkspaceSchema } from "@/schemas";
import * as z from "zod";

export const addWorkspace = async (
  formData: z.infer<typeof WorkspaceSchema>,
) => {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/workspace/add-workspace`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    },
  );

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};
