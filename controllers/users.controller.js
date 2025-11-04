import md5 from "md5";

export let userList = [
  {
    id: 1,
    name: "Fajar",
    username: "Arunikas",
    password: md5("12345"),
    role: "admin",
  },
  {
    id: 2,
    name: "Ari",
    username: "Gabisa Refund",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 3,
    name: "Adrian",
    username: "Explain Your Friendgroup",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 4,
    name: "Vino",
    username: "Gitulah",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 5,
    name: "Lia",
    username: "Sunshine",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 6,
    name: "Danu",
    username: "CodeMaster",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 7,
    name: "Nina",
    username: "PixelQueen",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 8,
    name: "Rafi",
    username: "NightOwl",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 9,
    name: "Sari",
    username: "CoffeeAddict",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 10,
    name: "Fikri",
    username: "ByteNinja",
    password: md5("12345"),
    role: "user",
  },
  {
    id: 11,
    name: "Raka",
    username: "DebuggingPro",
    password: md5("12345"),
    role: "user",
  },
];

export const addUsers = (req, res) => {
  let newUser = {
    id: userList.length + 1,
    nama: req.body.nama,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  };
  userList.push(newUser);
  try {
    res.status(201).json({
      status: "success",
      message: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const changeUsers = (req, res) => {
  try {
    const users = {
      where: {
        id: req.params.id,
      },
      data: {
        nama: req.body.nama,
        usename: req.body.username,
        password: req.body.password,
        role: req.body.role,
      },
    };
    res.status(201).json({
      status: "success",
      message: "User edited successfully",
      data: users,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUsers = (req, res) => {
  let userID = Number(req.params.id);
  let users = userList.find((u) => u.id === userID);

  try {
    res.status(201).json({
      status: "success",
      message: "User retrieved successfully",
      data: users,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
