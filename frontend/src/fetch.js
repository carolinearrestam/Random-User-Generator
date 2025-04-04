export async function fetchProfiles(count = 50) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/profiles?count=${count}`
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching profiles from backend:", error);
    return [];
  }
}
