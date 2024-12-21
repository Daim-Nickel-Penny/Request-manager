export type HttpMethod = "GET" | "POST" | "DELETE" | "PUT";

export interface RequestInput {
  id: string;
  requestId: string;
  httpMethod: HttpMethod;
  url: string;
  requestedAt: Date;
}
