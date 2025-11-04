import md5 from "md5";
import jwt from "jsonwebtoken";
import { userList } from "./users.controller.js";

const SECRET_KEY = "nawain";
export const authenticate = async (req, res) => {
  const { username, password } = req.body;
  try {
    // const userCheck = {
    //   where: {
    //     username: req.body.username,
    //     password: md5(req.body.password),
    //   },
    // };
    // let dataUser = userList.find(
    //   (user) =>
    //     user.username == userCheck.where.username &&
    //     user.password == userCheck.password
    // );
    const userCheck = userList.find(
      (user) => user.username === username && user.password === md5(password)
    );

    if (userCheck) {
      const payload = JSON.stringify(userCheck);
      console.log(payload);
      const token = jwt.sign(payload, SECRET_KEY);
      res.status(200).json({
        success: true,
        logged: true,
        message: "login success",
        token: token,
        data: userCheck,
      });
    } else {
      res.status(404).json({
        success: false,
        logged: false,
        message: "username or password invalid",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const authorize = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    console.log("cek authHeader " + authHeader);
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      let verifiedUser = jwt.verify(token, SECRET_KEY);
      if (!verifiedUser) {
        res.json({
          success: false,
          auth: false,
          message: "cannot permission to access",
        });
      }
      req.user = verifiedUser;
      next();
    } else {
      res.json({
        success: false,
        auth: false,
        message: "User Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
