import { Router } from "express";
import userController from "../controllers/UserController";

const userRoutes = Router();

userRoutes
  .get("/", (req, res) => userController.findMany(req, res))
  .get("/:id", (req, res) => userController.findOne(req, res))
  .post("/create", (req, res) => userController.create(req, res))
  .put("/update/:id", (req, res) => userController.update(req, res))
  .delete("/delete/:id", (req, res) => userController.delete(req, res));

export default userRoutes;
