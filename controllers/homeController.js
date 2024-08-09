const homeController = (req, res) => {
  res.render("pages/home", { title: "Home" });
};
export { homeController };