import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
  .setEndpoint("http://localhost:40/v1")
  .setProject("62869d91b66354683633");

export const account = appwrite.account;
