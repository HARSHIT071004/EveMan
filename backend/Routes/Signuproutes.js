// const express = require("express");
// const Signup = require("../models/signup");
// const { sanitizeFilter } = require("mongoose");
// // const jwt=require("jsonwebtoken")

// const router = express.Router();
// router.post("/signup", async (req, res) => {        //yahan async nhi lgti jahan hm password me hash bana rhe hai waha lagti hai async
//   try {

//     const { name, email, password } = req.body;


//     // let signu=await userModel.findOne({email: req.body.email});
//     // if(!user) return res.send("something went wrong");

// // bcrypt.compare((rq.body.password,signuword  async(err,result){
// // if(!result){
//     // let token= JsonWebTokenError.sign({email:signu.email},"shrrrrrrrrr");
// //  res.cookie("token",token)
// //  res.send("yes you can login")
// // }
// // else res.send("somethinf is wronfg")
// // })

//     // })
//    //     bcrypt.genSalt(10,(err,hash)=>{  >>>>>>>>>> ye dono lines
// // bcrypt.hash(password,salt,  async(err,hash)=>{




// //     }

//     // )

//     const newEvents = await new Signup({
//       // yahan aayegi
//       name,
//       email,
//       password,          //must be password:hash,
//       // description,
//       // date
//     });
//     // let token= JsonWebTokenError.sign({email},"shrrrrrrrrr");

//     await newEvents.save();
//     res.status(200).json({ message: "Signup succesful" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router(); // यहाँ router डिफाइन करो
// const express = require("express");
// const router = express.Router(); // यहाँ router डिफाइन करो

// const bcrypt = require("bcrypt");



const express = require("express");
const jwt = require("jsonwebtoken");
const Signup = require("../models/Signup");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Signup({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "sheeerrrrrrrrr" )


    res.status(200).json({ message: "Signup successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
