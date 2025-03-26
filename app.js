const express = require('express');
const app = express();
const port = 3000;

const examsRoute = require('./routes/exams');

app.use(express.json());
app.use(examsRoute);

const PORT = process.env.PORT || 3000;

//not conflict here by Palma

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
