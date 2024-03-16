import axios from "axios";

export const ajax = async (config) =>
  await axios.request(config).then((response) => {
    const { info, results } = response.data;

    if (info) return { info, results };

    return { info, results: results ?? response.data };
  });
