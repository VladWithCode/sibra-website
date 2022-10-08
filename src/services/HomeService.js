export async function fetchHomes() {
  let url =
    /* process.env.NODE_ENV === 'production'
      ? '/api/homes'
      : */ 'https://mockend.com/vladwithcode/sibra-website/homes?limit=10';

  const response = await fetch(url);

  if (!response.ok) throw new Error('Network error!');

  return response.json();
}
