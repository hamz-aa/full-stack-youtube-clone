import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  // console.log(req, " req");
  // console.log(req.body, " req.body");
  // console.log(req.body.headers.Authorization.split(" ")[1], " token");
  // const token = req.cookies.access_token;
  const token = req.body.headers.Authorization.split(" ")[1];
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};
