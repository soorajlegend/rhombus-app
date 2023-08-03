import axios from "axios";

const URL = process.env.NEXT_PUBLIC_DEFAULT_API_URL;

const changeStatus = async (
  storeId: string,
  storeItemId: string,
  status: boolean
): Promise<boolean> => {
  try {
    
    await axios.post(`${URL}/${storeId}/storeItems/${storeItemId}/status`, { status });
    return true;

  } catch (error) {
    console.error("Error updating data:", error);
    return false;
  }
};

export default changeStatus;
