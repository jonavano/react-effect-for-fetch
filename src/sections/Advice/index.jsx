import { useEffect, useState, useCallback } from 'react'
import FavouriteSlipsList from './components/FavouriteSlipsList';
import AdviceSlip from './components/AdviceSlip';


function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState('');
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);


     const fetchData = useCallback(async () => {
    const response = await fetch(url, { cache: "no-cache" });
    const jsonData = await response.json();
    setAdvice(jsonData.slip.advice);
  }, [url]);

  function addToFavorites(){
    setFavoriteAdvice([...favoriteAdvice, advice]);
  }

  function refreshAdvice() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <section>
      <AdviceSlip advice={advice} refreshAdvice={refreshAdvice} addToFavorites={addToFavorites}/>
      <FavouriteSlipsList favoriteAdvice={favoriteAdvice}/>
    </section>
  )
}

export default AdviceSection
