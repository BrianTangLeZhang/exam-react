import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/
export const fetchGames = async (search, genre, limit, sort, page) => {
  try {
    let params = {};
    if (search) params.search = search;
    if (genre) params.genre = genre;
    if (sort) params.sort = sort;
    if (limit) params.limit = limit;
    if (page) params.page = page;
    const query = new URLSearchParams(params);
    const res = await axios.get(`${API_URL}/games?${query.toString()}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/* INSTRUCTION: Create a function to fetch genres from the API */
export const fetchGenres = async () => {
  try {
    const res = await axios.get(`${API_URL}/genres`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

