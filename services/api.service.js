import axios from "axios";

export const getOsmosisData = async () => {
  try {
    const response = await axios.get(
      "https://api-osmosis.imperator.co/pools/v2/100"
    );
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
