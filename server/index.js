const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();


//connect to mongoDB
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: require("./graphql/schema/index"),
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(PORT, console.log(`Server started on port ${PORT}`));
