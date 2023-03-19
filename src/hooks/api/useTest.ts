const useTest = ({
  stopLoading,
  startLoading,
}: {
  stopLoading: VoidFunction;
  startLoading: VoidFunction;
}) => {
  const getInsights = async (url: string) => {
    try {
      startLoading();
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`
      );
      const data = await response.json();
      return data;
    } catch (errors) {
      console.error(errors);
      return errors;
    } finally {
      stopLoading();
    }
  };

  return {
    getInsights,
  };
};

export { useTest };
