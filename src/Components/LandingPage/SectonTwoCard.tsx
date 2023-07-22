type props = {
    cardImg: string
    cardAlt: string
    cardTitle: string
    cardText: string
    cardBtn: string
}

const Cards = ({cardImg, cardAlt, cardTitle, cardText, cardBtn}:props) => {
    return ( 
        <div>
            <img className='image-fluid' src={cardImg} alt={cardAlt} />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href="#" className="btn card_btn">{cardBtn}</a>
            </div>
        </div>
     );
}
 
export default Cards;