const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = process.env.PORT || 3000;

app.get('/:date', (req, res) => {
  const requestedDate = req.params.date;
  const timeZone = 'Asia/Manila'; // Set your desired timezone

  // Calculate the number of days until the requested date
  const currentDate = moment().tz(timeZone);
  const daysUntil = moment(requestedDate).tz(timeZone).diff(currentDate, 'days');

  res.json({ daysUntil });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
