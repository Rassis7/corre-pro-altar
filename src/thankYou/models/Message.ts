import { fauna, q } from "@/shared/services";

type SendMessageType = {
  name: string;
  message: string;
  slug: string;
};
export class Message {
  static async sendMessage(data: SendMessageType) {
    await fauna.query(q.Create(q.Collection("message"), { data }));
  }
}
