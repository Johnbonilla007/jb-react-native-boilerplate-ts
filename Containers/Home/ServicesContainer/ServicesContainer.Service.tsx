/**
 * ServicesContainer
 */

import { restClient } from "@/services/restClient";
import { ResponsePayload, RequestPayload } from "./settings";

export class ServicesContainerService {
  static baseUrl = "/";

  // Fetch all items
  static async getAll(): Promise<ResponsePayload[]> {
    return await restClient.httpGet(`${this.baseUrl}/`, {});
  }

  // Create or update an item
  static async createOrUpdate(request: RequestPayload): Promise<ResponsePayload> {
    return await restClient.httpPost(`${this.baseUrl}/`, request);
  }

  // Remove an item by ID
  static async remove(id: string | number): Promise<void> {
    return await restClient.httpDelete(`${this.baseUrl}/`, { id });
  }
}
