type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const apiRequest = async (
  url: string,
  method: HttpMethod = "GET",
  body: any = null,
  headers: HeadersInit = {}
): Promise<{ data?: any; error?: string }> => {
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    console.log({response});

    if (!response.ok) {
      const errorText = await response.text();
      return {
        error: `HTTP error! status: ${response.status}, message: ${errorText}`,
      };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occured" };
    }
  }
};

export default apiRequest;
