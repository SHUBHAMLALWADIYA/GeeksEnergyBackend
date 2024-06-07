const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT||8008;



app.use(cors());
app.use(express.json());



app.post("/api/movieList", async (req, res) => {
  try {
    const { category, language, genre, sort } = req.body;
    const response = await axios.post("https://hoblist.com/api/movieList", {
      category,
      language,
      genre,
      sort,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


app.listen(PORT,()=>{
    console.log(`server is Running at PORT ${PORT}`)
})
