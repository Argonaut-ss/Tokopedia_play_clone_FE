import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardVideo from "./components/CarVideo/CardVideo";
import CardProduct from "./components/CardProduct/CardProduct";
import VideoDetail from "./views/VideoDetail/VideoDetail";
import Home from "./views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="detail" element={<VideoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
