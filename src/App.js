import Row from './components/Row';
import './App.css';
import requests from './request'
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return(
<div className="App">
  <Navbar/>
<Banner/>
<Row 
title = "NETFLIX ORIGINALS"
fetchUrl = {requests.fetchNetflixOriginals}
isLargeRow={true}/>
<Row 
title = "TRENDING NOW"
fetchUrl = {requests.fetchTrending}
/>
<Row 
title = "ACTION MOVIES"
fetchUrl = {requests.fetchActionMovies}
/>
<Row 
title = "HORROR MOVIES"
fetchUrl = {requests.fetchHorrorMovies}
/>
<Row 
title = "COMEDY MOVIES"
fetchUrl = {requests.fetchComedyMovies}
/>
<Row 
title = "ROMANCE MOVIES"
fetchUrl = {requests.fetchRomanceMovies}
/>
<Row 
title = "DOCUMENTARY MOVIES"
fetchUrl = {requests.fetchDocumentaries}
/>
<Row 
title = "TOP-RATED MOVIES"
fetchUrl = {requests.fetchTopRated}
/>
</div>

  );

 
}

export default App;
