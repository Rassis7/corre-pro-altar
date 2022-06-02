import { fauna, q } from "@/shared/services";

type SetConfirmationType = {
  name: string;
  phone: string;
};

export class ConfirmPresence {
  static async setConfirmation(data: SetConfirmationType) {
    try {
      await fauna.query(q.Create(q.Collection("guests"), { data }));
    } catch (error) {
      console.log(error);
    }
  }
}
