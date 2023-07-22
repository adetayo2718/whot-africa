type props = {
    cardTitle: string
    cardText: string
}

const Card = ({cardTitle, cardText}:props) => {
    return ( 
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{cardTitle}</h4>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
     );
}
 
export default Card;