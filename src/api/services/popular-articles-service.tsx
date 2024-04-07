import axiosInstance from "@utils/apiInstance";
import { API_KEY } from "../../../config-global";

class MostPopularArticlesService {
  static async fetchMostPopularArticles(period: number) {
    try {
      const response = await axiosInstance.get(
        `/viewed/${period}.json?api-key=${API_KEY}`
      );
      console.log(response, "response");
      return response;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

export default MostPopularArticlesService;
