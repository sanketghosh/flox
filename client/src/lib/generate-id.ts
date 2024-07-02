import { v4 as uuidV4 } from "uuid";

export const generateRandomId = () => {
  let randomID = uuidV4();

  return randomID;
};
