const { connect } = require("mongoose");

const connectDb = async () => {
  // console.log("DB_URI:", process.env.DB_URI);
  // console.log("DB_NAME:", process.env.DB_NAME);

  return connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
};

module.exports = { connectDb };
