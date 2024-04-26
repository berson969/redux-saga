export const searchSkills = async (searchPattern: string) => {
	const params = new URLSearchParams({ q: searchPattern });

	const response = await fetch(`http://localhost:7070/api/search?${params}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return await response.json();
};

