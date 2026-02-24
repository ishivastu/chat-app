import "./config/env.js"

import { dbConnect } from "./db/db.js";

import app from "./app.js"

const PORT=process.env.PORT;

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 5001, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });


