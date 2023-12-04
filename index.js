const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/countdown/:date', (req, res) => {
    const userDate = moment.tz(req.params.date, 'Asia/Manila');
    const currentDate = moment.tz('Asia/Manila');
    const daysUntil = userDate.diff(currentDate, 'days');

    res.json({ daysUntil });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
