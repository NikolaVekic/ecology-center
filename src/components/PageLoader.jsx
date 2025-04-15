import React, { useEffect, useState } from "react";

const PageLoader = () => {
  // "loading" indicates if assets are still loading
  // "visible" controls whether the loader is rendered at all
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Trigger fade-out
      // After fade-out duration (500ms), remove the loader completely
      setTimeout(() => setVisible(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-100 transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-16 h-16 border-4 border-[#093A04] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default PageLoader;
