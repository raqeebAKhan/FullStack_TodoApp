import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Dataconnect = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.2tlqewv.mongodb.net/?retryWrites=true&w=majority`;

   
mongoose.connect(MONGODB_URI).then(()=> console.log("database connected")).catch((error)=>console.log("error" + error.message))
  
}

export default Dataconnect;