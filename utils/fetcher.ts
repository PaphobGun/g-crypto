import axiosClient, { AxiosResponse } from 'axios';
import HttpMethod from 'modules/common/enum/http.enum';

const { GET, POST } = HttpMethod;

const fetcher = async (
  url: string,
  method: HttpMethod = GET,
  params?: object
) => {
  const endpoint = process.env.NEXT_PUBLIC_BASE_URL + url;

  let response: AxiosResponse;
  switch (method) {
    case GET:
      response = await axiosClient.get(endpoint, { params });
      break;
    case POST:
      response = await axiosClient.post(endpoint, params);
      break;
    default:
      throw new Error('An error occurred method not allowed.');
  }
  if (response.status !== 200) throw new Error(response.statusText);
  return response.data;
};
export default fetcher;
