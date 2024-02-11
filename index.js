import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  return res.json({ message: "Hey, I am in NodeJs container" });
});
app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
