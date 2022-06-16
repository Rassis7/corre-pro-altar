import { ConfirmationLogType } from "@/shared/context";
import { fauna, q } from "@/shared/services";

type SendMessageType = {
  name: string;
  message: string;
  slug: string;
  confirmationLog?: ConfirmationLogType;
};
export class Message {
  static async sendMessage(data: SendMessageType) {
    await fauna.query(q.Create(q.Collection("message"), { data }));
  }
}
