export const blogsroute = "json/blogs.json";
export const postsroute = "json/";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

async function getAll<T>(route: string): Promise<T> {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${route}`, { method: 'GET', headers });
  try {
    if (!response.ok)
      throw new Error(`HTTP error status: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
  return response.json();
}

export { getAll };