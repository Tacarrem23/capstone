const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Default Route
app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
