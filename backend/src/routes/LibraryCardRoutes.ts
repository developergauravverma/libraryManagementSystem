import express from "express";
import LibraryCardController from "../controllers/LibraryCardController";

const route = express.Router();

route.get("/:cardId", LibraryCardController.getLibraryCard);
route.post("/", LibraryCardController.createLibraryCard);

export = route;
