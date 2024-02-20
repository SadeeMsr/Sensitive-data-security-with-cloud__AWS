export const useApiQuery = {
  login,
};

function login(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "/",
      ContentType: "application/json",
    },
    body: JSON.stringify(data)
  };

  var url =  "log-in";

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}${url}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = Object.values(data)[0] || response.status; //data.Errors || response.statusText || data.error || response.error;
      return Promise.reject(error);
    }

    return data;
  });
}