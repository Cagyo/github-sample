interface IApiRequestParams {
  query?: object;
  body?: string;
}

const objectToQuery = (queryParams: any) => Object.keys(queryParams)
  .map(param => Array.isArray(queryParams[param])
    ? queryParams[param]
      .map(item => `${encodeURIComponent(param)}[]=${encodeURIComponent(item)}`)
      .join('&')
    : `${encodeURIComponent(param)}=${encodeURIComponent(queryParams[param])}`)
  .join('&');

const parseJSON = response => new Promise(resolve =>
  response.json()
    .then(json => resolve({
      json,
      status: response.status,
      ok: response.ok,
      headers: response.headers.map,
    })));

export async function callApi(
  method: HttpRequestMethodType,
  url: string,
  params: IApiRequestParams = {},
): Promise<any> {
  const queryParams = params.query || {};
  const body = JSON.stringify(params.body);
  const query = objectToQuery(queryParams);

  return await new Promise((resolve, reject) => {
    fetch(`${url}?${query}`, {
      method,
      body,
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(parseJSON)
    .then((response: IServerResponse) => {
      if (response.ok) {
        return resolve(response.json);
      }

      return reject(response.json);
    })
    .catch(error => reject({
      networkError: error.message,
    }));
  });
}
