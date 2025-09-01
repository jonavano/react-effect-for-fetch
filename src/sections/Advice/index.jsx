import { useEffect, useState, useCallback } from 'react'


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
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={refreshAdvice}>Get More Advice</button>
        <button onClick={addToFavorites}>Save to Favourties</button>

      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {/* {console.log("before map")}
          {console.log(favoriteAdvice)} */}
          {favoriteAdvice.map((advice) => (
            <><li>{advice}</li></>
          ))}
        </ul>

      </section>
    </section>
  )
}

export default AdviceSection
