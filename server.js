const express = require('express');
const app = express();
const userRouter = require('./routes/users');
app.get('/', (req, res) => {
  res.send("Hello world!\nThis is my first API!");
})
app.use('/users', userRouter);
const port = process.env.PORT || 8000;
app.listen(port, () => `Server running on port ${port}`);