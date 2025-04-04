import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/profiles", async (req, res) => {
  const count = req.query.count || 50;

  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const { results } = await response.json();

    const formattedResults = results.map((user) => ({
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

    res.json(formattedResults);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ error: "Failed to fetch profiles" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
