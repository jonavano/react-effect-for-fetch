function AdviceSlip({advice, refreshAdvice, addToFavorites}) {
    return <>
    <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={refreshAdvice}>Get More Advice</button>
        <button onClick={addToFavorites}>Save to Favourties</button>

      </section></>
}
export default AdviceSlip