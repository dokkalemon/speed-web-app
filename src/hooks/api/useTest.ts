import { useState } from "react";

const useTest = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getInsights = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&locale=it&category=performance&category=accessibility&category=best-practices&category=pwa&category=seo`
      );
      const status = response.status;
      const data = await response.json();
      return { data, status };
    } catch (errors) {
      console.error(errors);
      return errors;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getInsights,
  };
};

export { useTest };
