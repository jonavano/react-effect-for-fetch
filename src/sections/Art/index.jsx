import { useEffect, useState } from 'react'

function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      // console.log(jsonData)
      setData(jsonData);
    };
    fetchData();
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
        {/* {console.log(data)} */}
        {data.map((section) => (
          <>
           <li>
            
             <div className="frame">
             <img
             src={"https://boolean-uk-api-server.fly.dev" + section.imageURL }
             />
             </div>
            <h3>{section.title}</h3>
            <p>{section.artist}</p>
            <h4>Pubication History:</h4>
            <ul>
              {section.publicationHistory.map((publication) => (
                <>
                <li>
                  {publication}
                </li>
                </>
              ))}

            </ul>

            
          
        
        </li>
          
          </>

        ))}


      </ul>
      </div>
    </section>
  )
}

export default ArtsSection
