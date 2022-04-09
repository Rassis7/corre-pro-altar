import { Axios } from "axios";

export class Photos {
  #api = {} as Axios;

  constructor(api: Axios) {
    this.#api = api;
  }

  async getAll() {
    const { data: photos } = await this.#api.get<Record<number, string>[]>(
      "/photos"
    );

    return Object.values(photos).map((url) => url[0]);
  }
}
