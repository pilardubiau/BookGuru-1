var express = require("express");
var app = express();
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", routes);

// db.sync({force: true}).then(() => {
//     console.log("Database running");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   });

