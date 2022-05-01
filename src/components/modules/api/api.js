import ENDPOINTS from "./endpoints";

const BASE_URL = "https://5f7998dbe402340016f9321f.mockapi.io";

class api {
  constructor(base_url, endpoints) {
    this.base_url = base_url;
    this.endpoints = endpoints;
  }

  async generateRequest(endpoint, data) {
    const { method, uri } = this.endpoints[endpoint];

    return fetch(`${this.base_url}${uri}`, { method, body: data });
  }

  async fetch(endpoint, data) {
    const response = await this.generateRequest(endpoint, data);

    return response.json();
  }
}

export default new api(BASE_URL, ENDPOINTS);
