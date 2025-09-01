import PublicationHistory from './PublicationHistoryList';

function ArtListItem({section}) {
    return <>
           <li>
            
             <div className="frame">
             <img
             src={"https://boolean-uk-api-server.fly.dev" + section.imageURL }
             />
             </div>
            <h3>{section.title}</h3>
            <p>{section.artist}</p>
            <PublicationHistory publicationHistory={section.publicationHistory}/>

        </li>
          
          </>
}

export default ArtListItem