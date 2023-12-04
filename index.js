const express = require('express');
const moment = require('moment-timezone');

const app = express();
const port = 3000; // You can change this port if needed

// Define a route for the countdown
app.get('/countdown', (req, res) => {
  // Calculate the days until a specific date (replace '2023-12-31' with your target date)
  const targetDate = moment.tz('2023-12-31', 'Your_Timezone');
  const today = moment();
  const daysUntil = targetDate.diff(today, 'days');

  res.json({ daysUntil });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
