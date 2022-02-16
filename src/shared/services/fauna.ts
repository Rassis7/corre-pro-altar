import { Client, query } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY as string,
});

export const q = query;
