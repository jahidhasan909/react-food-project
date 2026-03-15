
import { Suspense } from 'react';
import './App.css'
import Foods from './Components/Foods/Foods';
import Navbar from './Components/Navbar'


const FoodData = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res => res.json());

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loding....</p>}>
        <Foods FoodData={FoodData}></Foods>
      </Suspense>
    </div>
  )
}

export default App
