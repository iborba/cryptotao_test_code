import { HttpResponse } from "./Http";

export interface Controller<T = any> {
  // handle: (request: T) => Promise<HttpResponse>
  handle: (request: T, type?: object) => Promise<HttpResponse>
}