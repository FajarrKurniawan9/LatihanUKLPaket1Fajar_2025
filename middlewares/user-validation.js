import { validationResult, body } from "express-validator";

export const validateUser = [
  body("nama").isString().withMessage("Nama must be a string"),
  body("username")
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .isIn(["admin", "user"])
    .withMessage("Role must be either admin or user"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMessages = errors
        .array()
        .map((it) => it.msg)
        .join(",");
      try {
        res.status(422).json({
          success: false,
          message: errMessages,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
    next();
  },
];
