const useTest = () => {
  const getInsights = async (url: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`
      );
      const data = await response.json();
      return data;
    } catch (errors) {
      console.error(errors);
      return errors;
    } finally {
      console.log("ho finito");
    }
  };

  return {
    getInsights,
  };
};

export { useTest };
