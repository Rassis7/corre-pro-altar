import axios from "axios";

const api = axios.create({
  baseURL:
    "https://sheet.best/api/sheets/36b49bda-04a0-411b-827c-9a238e8c1b40/tabs",
});

export { api };
