import { Router } from "express";
import passport from "passport";
import {
  readContact,
  deleteContact,
  updateContact,
  createContact,
} from "../Controllers/contact.controllers";

const route = Router();

route.get(
  "/contact",
  passport.authenticate("jwt", { session: false }),
  readContact
);
route.post(
  "/contact",
  passport.authenticate("jwt", { session: false }),
  createContact
);
route.delete(
  "/contact",
  passport.authenticate("jwt", { session: false }),
  deleteContact
);
route.patch(
  "/contact",
  passport.authenticate("jwt", { session: false }),
  updateContact
);

export default route;
