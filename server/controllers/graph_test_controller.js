const { session } = require("../models/db"); // Import the session setup

// Example controller function using the session and returning the first 10 nodes
async function getNodes(req, res) {
  try {
    const result = await session.run("MATCH (n) RETURN n LIMIT 10");
    const nodes = result.records.map((record) => record.get("n"));
    res.json(nodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createPerson = async (req, res) => {
  try {
    const { name } = req.body; // Assuming the name is passed in the request body

    const result = await session.run("CREATE (:Person {name: $name})", {
      name,
    });
    const summary = result.summary;

    res
      .status(201)
      .json({ message: `Person node '${name}' created successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modified createPerson function to include mood property
const createPersonWithMood = async (req, res) => {
  try {
    const { name, mood } = req.body;

    const result = await session.run(
      "CREATE (:Person {name: $name, mood: $mood})",
      { name, mood }
    );
    const summary = result.summary;

    res.status(201).json({
      message: `Person node '${name}' created successfully with mood '${mood}'`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modified getNodes function to return all properties of all nodes
const getAllNodesWithProperties = async (req, res) => {
  try {
    const result = await session.run("MATCH (n) RETURN n");
    const nodes = result.records.map((record) => record.get("n").properties);
    res.json(nodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNodes,
  createPerson,
  createPersonWithMood,
  getAllNodesWithProperties,
};
