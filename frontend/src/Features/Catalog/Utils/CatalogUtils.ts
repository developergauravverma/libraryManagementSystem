export const generateRandomGenres = (): string[] => {
  let chosen: string[] = [];
  let choices = [
    "Non-Fiction",
    "Children",
    "Fantasy",
    "Fiction",
    "Biography",
    "Romance",
    "Science",
    "Young Adult",
  ];
  while (chosen.length !== 5) {
    let num = Math.floor(Math.random() * 7);
    if (!chosen.includes(choices[num])) chosen.push(choices[num]);
  }
  return chosen;
};
