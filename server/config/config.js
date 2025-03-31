export const JWT_SECRET = "ldfjkldjflkdlkdk";
export const COOKIE = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 3600000,
};
