import { doesNotMatch } from "assert";
import { RequestHandler } from "express";
import User from "../Models/user";

export const login: RequestHandler = async (req, res) => {
  res.json({ data: req.user });
};

export const signup: RequestHandler = async (req, res) => {
  
};
