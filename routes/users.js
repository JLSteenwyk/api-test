const express = require("express");
const router = express.Router();

const dummyData = [{
    "name": "First0 Last0",
    "age": 99,
    "description": "Oldest"
  },
  {
    "name": "First1 Last1",
    "age": 10,
    "description": "Youngest"
  },
  {
    "name": "First2 Last2",
    "age": 40,
    "description": "Middle"
  }
];

router.get("/", (req, res) => {
  res.json(dummyData);
});

router.get("/:user_id", (req, res) => {
  const user_id = req.params.user_id;
if (dummyData.length <= user_id) return res.json({ message: "User not found" });
  res.json(dummyData[user_id]);
});
module.exports = router;