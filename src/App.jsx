import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "ldrs/ring";

function App() {
  const Home = lazy(() => import("./Home"));
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <l-ring
              size="40"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="#101828"
            ></l-ring>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
