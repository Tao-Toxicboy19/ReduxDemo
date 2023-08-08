import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./store/Store";
import MovieDetail from "./components/MovieDetail/MovieDetail";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Provider>
    </>
  );
}
