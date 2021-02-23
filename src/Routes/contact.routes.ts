import { Router } from "express";
import { getAllContact } from "../Controllers/contact.controllers";

const route = Router()

route.get("/contact",getAllContact)
route.post("/newcontact")
route.delete("/:idocontact")
route.patch("/newcontactac")


export default route 