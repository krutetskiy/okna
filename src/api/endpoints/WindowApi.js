import { ApiSettings } from 'src/api/config.js';

export default {
  async getWindows() {
    const response = await fetch(ApiSettings.host + '/windows', {
      method: 'GET',
      headers: ApiSettings.headers
    });
    if (response.status != 200) {
      throw response.status;
    } else {
      return response.json();
    }
  }
}