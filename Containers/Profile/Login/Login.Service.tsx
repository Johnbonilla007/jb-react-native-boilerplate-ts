/**
 * Login
 */

import { restClient } from "@/services/restClient";
import { RequestAthenticate, ResponseAthenticate, ResponsePayload } from "./settings";

export class LoginService {
  static baseUrl = "/security/users";

  // Fetch all items
  static async getAll(): Promise<ResponsePayload[]> {
    return await restClient.httpGet(`${this.baseUrl}/`, {});
  }

  // Create or update an item
  static async authenticate(
    request: RequestAthenticate
  ): Promise<ResponseAthenticate> {
    return await restClient.httpPost(`${this.baseUrl}/authenticate`, request);
  }

  // Remove an item by ID
  static async remove(id: string | number): Promise<void> {
    return await restClient.httpDelete(`${this.baseUrl}/`, { id });
  }
}
