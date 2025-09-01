
function PublicationHistory({ publicationHistory }) {
    return <>
        <h4>Pubication History:</h4>
        <ul>
            {publicationHistory.map((publication) => (
                <>
                    <li>
                        {publication}
                    </li>
                </>
            ))}

        </ul>
    </>
}

export default PublicationHistory;