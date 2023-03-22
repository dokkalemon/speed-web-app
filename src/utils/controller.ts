export const urlRegex = new RegExp(
  "^(https?:\\/\\/)?([a-zA-Z0-9\\-]+\\.)+[a-zA-Z0-9]{2,999}(\\/[a-zA-Z0-9\\-._?,'+&%$#=~]+)*(\\.([a-zA-Z]{2,6})){1}$"
);

export const addHttps = (site: string) => {
  let validSite = site;
  const firstFourLetter = validSite.substring(0, 4);
  if (firstFourLetter !== "http") {
    validSite = `https://${validSite}`;
  }
  return validSite;
};
