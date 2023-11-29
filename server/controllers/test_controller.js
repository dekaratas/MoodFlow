const { sampleData } = require("../models/db");

// Log a simple Post Request and data within
async function logData(req, res) {
  try {
    const phoneData = req.body;
    res.status(200).send(`${phoneData.name}`);
    console.log(phoneData);
    console.log(phoneData.name);
    console.log(phoneData.mood);
  } catch (err) {
    res.status(401).send("Something went very wrong!");
    console.error(err);
  }
}

async function getSampleData(req, res) {
  try {
    res.status(200).send(sampleData[0]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  logData,
  getSampleData,
};
