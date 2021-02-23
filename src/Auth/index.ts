import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../Models/user";

import {Strategy as JWTstrategy}  from  "passport-jwt"
import {ExtractJwt as ExtractJWT} from "passport-jwt";
import { Interface } from "readline";


passport.use(
  "login",
  new LocalStrategy(async (username: String, password: String, done: any) => {
    try {
      let currentUser = await User.findOne({ username: username }).exec();
      if (!currentUser) {
        return done(null, "username or password is invalid");
      }

      let validate = await currentUser.isValidPassword(password);

      if (!validate) {
        return done(null, false, "username or password is invalid");
      }
      return done(null, currentUser);
    } catch (error) {
      return done(error);
    }
  })
);

passport.use(new LocalStrategy({},async()=>{}))

passport.use(
  new JWTstrategy(
    {
      secretOrKey: "TOP_SECRET",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
