export type User = {
  id: string;
  email: string;
  username: string;
  // number if DB expects Epoch Milliseconds
  // string if it expects ISO-8601 strings
  createdAt: number | string;
}