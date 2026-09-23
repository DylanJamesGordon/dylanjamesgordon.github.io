const path = require('path');
const express = require('express');

//Setup defaults for script
const app = express();

//Stylesheet
app.use(express.static(path.join(__dirname, 'public')));

//Webpage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
