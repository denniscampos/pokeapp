const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`);
});
