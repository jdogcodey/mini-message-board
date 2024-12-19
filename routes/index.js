const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/view-message/:messageId", indexController.viewMessage);
indexRouter.get("/new", indexController.renderNew);
indexRouter.post("/new", indexController.addUser);
indexRouter.get("/", indexController.renderHomepage);

module.exports = indexRouter;
