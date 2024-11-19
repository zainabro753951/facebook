const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const PATH = 5000;
const signup = require("./Routes/signup");
const login = require("./Routes/login");
const isAuthenticated = require("./middlewares/auth");

// Sesion memory
const sessionStore = new session.MemoryStore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  session({
    secret: "user_id",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 },
  })
);

// Routes
app.use(signup);
app.use(login);

// protected routes

app.get("/home", isAuthenticated, (req, res) => {
  let user_id = req.session.user_id;
  res
    .status(200)
    .json({ message: "Welcome to the Home page!", userId: user_id });
});

app.listen(PATH, () => {
  console.log(`http://localhost:${PATH}/`);
});
