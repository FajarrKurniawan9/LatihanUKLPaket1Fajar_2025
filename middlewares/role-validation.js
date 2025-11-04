export async function isUser(req, res, next) {
  console.log(req.user.role);
  if (req.user.role == "user") {
    next();
  } else {
    res.status(403).json({
      success: false,
      auth: false,
      message: "Access denied, user role required",
    });
  }
}

export async function isAdmin(req, res, next) {
  if (req.user.role == "admin") {
    next();
  } else {
    res.status(403).json({
      success: false,
      auth: false,
      message: "Access denied, admin role required",
    });
  }
}
