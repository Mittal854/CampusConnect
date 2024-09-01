import express from "express";
const app = express();
const port = 3000;
import web from "./routes/web.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", web);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
  { email: "student1@example.com", password: "student123", role: "student" },
  { email: "teacher1@example.com", password: "teacher123", role: "teacher" },
  { email: "club1@example.com", password: "club123", role: "club" },
  { email: "admin1@example.com", password: "admin123", role: "admin" },
];

app.post("/login", (req, res) => {
  const { email, password, role } = req.body;

  // Find the user in the dummy data
  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password &&
      (u.role === role || u.role === "admin")
  );

  if (user) {
    // Simulate successful login
    if (user.role === "student") {
      return res.redirect("/student_dashboard");
    } else if (user.role === "teacher") {
      return res.redirect("/teacher_dashboard");
    } else if (user.role === "club") {
      return res.redirect("/club_dashboard");
    } else if (user.role === "admin") {
      return res.redirect("/admin_dashboard");
    }
  } else {
    // If the user is not found, return an error message
    return res.status(401).send("Invalid email, password, or role");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
