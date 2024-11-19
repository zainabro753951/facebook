const router = require("express").Router();
const bcrypt = require("bcryptjs");
const userDbModel = require("../databaseConn");

router.post("/login", async (req, res) => {
  let password = req.body.password;
  let data;

  try {
    data = await userDbModel.findOne({ phoneNumber: req.body.phoneNumber });

    if (!data) {
      return res.json({ notFound: "User not found" });
    }

    let isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return res.json({ wrongCred: "Invalid credentials" });
    }

    req.session.user_id = { userId: data._id };
    res.status(200).json({ successMessage: "Login successful" });
  } catch (error) {
    res.json({ error: "Server error" });
  }
});

module.exports = router;
