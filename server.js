// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(jsonServer.bodyParser);
// server.use(middlewares);

// // Custom login endpoint
// server.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const users = router.db.get("users").value();
  
//   const user = users.find((u) => u.username === username && u.password === password);
  
//   if (user) {
//     res.status(200).json({ message: "Login successful", user });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// server.use(router);

// server.listen(5000, () => {
//   console.log("JSON Server is running on port 5000");
// });
