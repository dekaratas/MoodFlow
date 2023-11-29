const { logData, getSampleData } = require("./controllers/test_controller.js");
const router = require("express").Router();
const {
  getNodes,
  createPerson,
  getAllNodesWithProperties,
  createPersonWithMood,
} = require("./controllers/graph_test_controller.js");

router.get("/flow");
router.post("/receiveData", logData);
router.get("/receiveData", getSampleData);
router.get("/getNodes", getNodes);
router.post("/createNode", createPerson);
router.get("/getFullNodes", getAllNodesWithProperties);
router.post("/createMoodyNode", createPersonWithMood);

module.exports = router;
