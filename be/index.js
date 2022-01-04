const express = require("express");
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
// const movieRoute = require("./routes/movies");
// const listRoute = require("./routes/lists");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in MongoDB connection: ' + err)
    }
});

const corsOptions = {
    origin: process.env.ORIGIN || "http://localhost:3000",
    // methods: GET,HEAD,PUT,PATCH,POST,DELETE,
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('tiny'))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// app.use("/api/movies", movieRoute);
// app.use("/api/lists", listRoute);

PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})