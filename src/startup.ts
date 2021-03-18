import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./Routes/user.routes";
import contactRoutes from "./Routes/contact.routes";
import passport from "passport";

require("./database");

const app = express();

// middleware
app.use(morgan("common"));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(userRoutes);
app.use(contactRoutes);

export default app;
