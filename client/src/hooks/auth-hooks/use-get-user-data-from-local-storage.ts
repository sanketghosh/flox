import { useEffect, useState } from "react";

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
};

export const useGetUserDataFromLocalStorage = () => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDetails = localStorage.getItem("user_details");
    if (userDetails) {
      const parsedData = JSON.parse(userDetails);
      setData(parsedData);
    }
  }, []);

  return {
    id: data?.id,
    firstName: data?.firstName,
    lastName: data?.lastName,
    email: data?.email,
    createdAt: data?.createdAt,
  };
};
