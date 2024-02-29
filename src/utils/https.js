import { baseUrl } from "../config";

const fetchInstance = (method, credentials) => {
  fetch(baseUrl, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      APIKey: "80109414-c38e-4bed-b251-190ee1f88190",
    },
    body: credentials,
  });
};
