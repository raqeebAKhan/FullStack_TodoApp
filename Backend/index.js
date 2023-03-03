import express from "express"
import Dataconnect from "./db/connect.js";
import cors from "cors";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";



const app = express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Routes);

const PORT = 8000;

Dataconnect();


app.listen(PORT,() => console.log(`server is running successfully on PORT  ${PORT}`));