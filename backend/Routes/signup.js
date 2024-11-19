const router = require("express").Router();
const userDbModel = require("../databaseConn");
const bcrypt = require("bcryptjs");
router.post("/signup", async (req, res) => {
  let { firstName, lastName, day, month, year, gender, phoneNumber, password } =
    req.body;
  let hashedPassword = await bcrypt.hash(password, 10);

  let messages = {
    warning: {
      WarningMsg: "Your phone number must have a country code!",
    },
    success: {
      successMsg: "Form successfully submitted!",
    },
    phoneValidation: {
      phoneValidationMsg: "This phone number is already registered!",
    },
  };
  if (!req.body.phoneNumber.startsWith("+")) {
    res.send(messages.warning);
  } else {
    let phoneValidation = await userDbModel.findOne({
      phoneNumber: phoneNumber,
    });
    if (phoneValidation) {
      return res.send(messages.phoneValidation);
    }
    let storingData = await userDbModel({
      firstName: firstName,
      lastName: lastName,
      day: day,
      month: month,
      year: year,
      gender: gender,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });
    let result = await storingData.save();
    if (result) {
      return res.send(messages.success);
    }
  }
});
module.exports = router;
