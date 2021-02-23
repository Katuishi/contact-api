import mongoose, { ConnectionOptions } from "mongoose";
import { MONGO_PASS, MONGO_STRING, MONGO_USER } from "./Config";

(async () => {
  const settingMongoose: ConnectionOptions = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    authSource: "admin",
    user: `${MONGO_USER}`,
    pass: `${MONGO_PASS}`,
  };

  mongoose.connect(`${MONGO_STRING}`, settingMongoose).then(
    () => {
      console.log("Database is alright");
    },
    (error) => {
      console.log(error);
    }
  );
})();
