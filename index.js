require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.SERVER_PORT;

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// --- DATABASE CONNECTION ---
const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.cjcmag0.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(`Error from DB connection`);
    console.log(error.message);
  }
};

// --- USER api ---
app.use("/user", userRoute);
// --- root api ---
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, async () => {
  try {
    console.log(`Server is running at port - ${PORT}`);
    dbConnection();
  } catch (error) {
    console.log(`Error from app listening`);
    console.log(error.message);
  }
});
