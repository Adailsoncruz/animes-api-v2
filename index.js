const express = require('express');
const animesRoutes = require("./src/routes/animes")
const usersRoutes = require("./src/routes/users")
const authRoutes = require("./src/routes/auth")
require('./src/models')
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors ())
app.use(animesRoutes);
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})