import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

const saveUser = async (
  id: string,
  firstName: string,
  lastName: string,
  emailAddress: string
): Promise<User | null> => {
  const userData = {
    id,
    firstName,
    lastName,
    emailAddress,
  };

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error saving user:", error);
    return null;
  }
};

export default saveUser;
