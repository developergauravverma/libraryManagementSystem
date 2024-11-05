import express from "express";
import BookController from "../controllers/BookController";

const routes = express.Router();

routes.get("/", BookController.getAllBooks);
routes.post("/", BookController.createBook);
routes.put("/", BookController.updateBook);
routes.delete("/:barcode", BookController.deleteBook);

export = routes;
