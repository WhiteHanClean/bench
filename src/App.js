import React, { useState, useEffect } from "react";
import MainLayout from "./components/MainLayout";
import Begin from "../src/components/begin/Begin";
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  return <>{loading ? <Begin /> : <MainLayout />}</>;
};

export default App;
