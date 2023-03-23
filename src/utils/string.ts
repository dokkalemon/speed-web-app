export const reduceText = (text: string) => {
  if (text.length > 35) {
    return `${text.substring(0, 35)}...`;
  }

  return `${text}`;
};

export const takeTextPortion = (text: string | undefined, word: string) => {
  if (text && word) {
    const words: string[] = text.split(" ");
    const position: number = words.indexOf(word);
    const newString = words.slice(0, position + 1).join(" ");
    return newString;
  }
};
