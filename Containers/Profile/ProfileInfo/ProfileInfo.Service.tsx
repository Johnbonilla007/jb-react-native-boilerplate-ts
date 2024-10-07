/**
 * ProfileInfo
 */

import { restClient } from "@/services/restClient";

// Define the request payload and response types if known
interface RequestPayload {
  // Define the structure of the request payload here
}

interface ResponsePayload {
  // Define the structure of the response payload here
}

export class ProfileInfoService {
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
