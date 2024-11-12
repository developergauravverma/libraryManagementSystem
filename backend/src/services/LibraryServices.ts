import LibraryDao, { ILibraryCardModel } from "../daos/LibraryDao";
import { ILibraryCard } from "../models/LibraryCard";

export const registerLibraryCard = async (
  card: ILibraryCard
): Promise<ILibraryCardModel> => {
  try {
    const saveCard = new LibraryDao(card);
    return await saveCard.save();
  } catch (error: any) {
    let c = await LibraryDao.findOne({ user: card.user }).populate("user");
    if (c) return c;
    throw new Error(`Error in registerLibraryCard service error = ${error}`);
  }
};

export const findLibraryCard = async (
  libraryCardId: string
): Promise<ILibraryCardModel> => {
  try {
    let card = await LibraryDao.findOne({ _id: libraryCardId }).populate(
      "user"
    );
    if (card) return card;

    throw new Error();
  } catch (error: any) {
    throw new Error(`Error in findLibraryCard service error = ${error}`);
  }
};
