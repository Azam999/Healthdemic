const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  console.log(user);

  if (user) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hash = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hash,
  });

  newUser.save().then((userInfo) => {
    const jwtPayload = {
      _id: userInfo._id,
    };

    const accessToken = jwt.sign(jwtPayload, process.env.JWT_KEY, {
      expiresIn: '30d',
    });

    res.status(201).send({
      user: {
        _id: userInfo._id,
        name: userInfo.name,
        email: userInfo.email,
      },
      accessToken,
      message: 'User Created',
      auth: true,
    });
  });
});

module.exports = router;