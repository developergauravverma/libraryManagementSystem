import { Request, Response } from "express";
import {
  findLibraryCard,
  registerLibraryCard,
} from "../services/LibraryServices";
import { ILibraryCard } from "../models/LibraryCard";

const getLibraryCard = async (req: Request, res: Response) => {
  const { cardId } = req.params;
  try {
    let libraryCard = await findLibraryCard(cardId);
    res.status(200).json({ message: "retrived library card", libraryCard });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error in getLibraryCard error = ${error}` });
  }
};

const createLibraryCard = async (req: Request, res: Response) => {
  const card: ILibraryCard = req.body;
  try {
    let libraryCard = await registerLibraryCard(card);
    res
      .status(200)
      .json({ message: "Generate library card for user", libraryCard });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error in createLibraryCard error = ${error}` });
  }
};

export default { getLibraryCard, createLibraryCard };
