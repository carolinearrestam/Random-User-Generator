export async function fetchProfiles(count = 50) {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const { results } = await res.json();

    return results.map((user) => ({
      fullName: `${user.name.first} ${user.name.last}`,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      age: user.dob.age,
      city: user.location.city,
      country: user.location.country,
      pictureMedium: user.picture.medium,
      pictureLarge: user.picture.large,
    }));
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return [];
  }
}
