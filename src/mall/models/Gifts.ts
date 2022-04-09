import { Axios } from "axios";

export class Gifts {
  #api = {} as Axios;

  constructor(api: Axios) {
    this.#api = api;
  }

  async getGifts() {
    return {};
  }
}
