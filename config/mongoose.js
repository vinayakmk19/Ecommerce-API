const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const db = () => {
    mongoose.connect("mongodb+srv://vinayakkambletest:jdTNJVo5LsWFStwV@cluster0.wwtvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB database with host :: ${con.connection.host}`)
    })
};

module.exports = db;