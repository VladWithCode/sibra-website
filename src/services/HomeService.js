export async function fetchHomes() {
	const response = await fetch('/api/casas');
	const data = await response.json();

	if (!response.ok) throw new Error(data.message || 'Error de red');

	return data;
}

export async function postHome() {}
