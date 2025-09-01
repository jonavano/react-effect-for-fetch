function FavouriteSlipsList({favoriteAdvice}) {
  let index = 0;
    return <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {/* {console.log("before map")}
          {console.log(favoriteAdvice)} */}
          {favoriteAdvice.map((advice) => (
            <><li key={index++}>{advice}</li></>
          ))}
        </ul>

      </section>
}

export default FavouriteSlipsList;