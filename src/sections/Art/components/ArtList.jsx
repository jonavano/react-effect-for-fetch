import { useEffect, useState } from 'react'
import ArtListItem from './ArtListItem';

function ArtList() {
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

    return <ul className="art-list">
        {data.map((section, index) => (
            <ArtListItem key={index} section={section} />
        ))}


    </ul>
}
export default ArtList