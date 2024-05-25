import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Routes,Route } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

 
// 홈페이지  
// 영화 전체 보여주는 페이지 (서치)   /movies
// 영화 디테일 페이지   /movies/:id


// index 는 path="/" 랑 동일
// 서브 라우터 = nested route
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/> 
        <Route path="/movies">
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
