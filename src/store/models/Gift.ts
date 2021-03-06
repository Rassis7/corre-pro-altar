import { Axios } from "axios";
import { RawGift } from "../types";

export class Gift {
  #api = {} as Axios;

  constructor(api: Axios) {
    this.#api = api;
  }

  async getAll() {
    const { data: gifts } = await this.#api.get<RawGift[]>("/gifts");

    return gifts;
  }
}
