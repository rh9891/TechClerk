const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ message: "Welcome to Tech Clerk!" }));

// Define the routes.
app.use("/api/techs", require("./routes/techs"));
app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}.`));
