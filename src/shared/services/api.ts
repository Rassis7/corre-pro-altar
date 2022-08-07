import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.SHEETS_URL}/tabs`,
});

export { api };
