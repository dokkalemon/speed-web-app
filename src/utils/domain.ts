const colors = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#82ca60"];

export const assingColor = (property: any) => {
  return property.map((el: any, index: number) => ({ ...el, fill: colors[index] }));
};

export const getPrimaryCategories = (result: any) => {
  const primaryCategories = Object.values(result.lighthouseResult.categories).map((el: any) => ({
    label: el.title,
    score: el.score * 100,
    description: el?.description,
    manualDescription: el.manualDescription,
  }));
  return assingColor(primaryCategories);
};

const performanceValue = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "total-blocking-time",
  "speed-index",
  "cumulative-layout-shift",
];

export const getPerformance = (result: any) => {
  const audits = result.lighthouseResult.audits;
  const performanceAudit = performanceValue.map((el) => audits[el]);
  return performanceAudit;
};
