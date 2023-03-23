export const reduceText = (text: string) => {
  if (text.length > 35) {
    return `${text.substring(0, 35)}...`;
  }

  return `${text}`;
};
