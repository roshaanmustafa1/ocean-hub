export async function cartAPI(amount = 1) {
  const response = await fetch("http://localhost:8080");
  const result = await response.json();
  return { data: result };
}
