export const blogsroute = "json/blogs.json";
export const postsroute = "json/";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

async function getAll<T>(route: string): Promise<T> {
  const response = await fetch(`http://localhost:3000/${route}`, { method: 'GET', headers });

  if (!response.ok)
    throw new Error(`HTTP error status: ${response.status}`);

  return response.json();
}

export { getAll };