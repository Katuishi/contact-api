import { Router } from "express";
import { login, signup } from "../Controllers/user.controller";
import passport from "passport";

const route = Router();

route.post(
  "/login",
  passport.authenticate("login", {
    session: false,
  }),
  login
);
route.post(
  "/signup",
  signup
);

export default route;
