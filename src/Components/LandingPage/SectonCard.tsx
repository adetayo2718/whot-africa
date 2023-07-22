
const Cards = ({cardImg}:any) => {
    return ( 
        <div className="">
            <img className='image-fluid' src={cardImg} alt="game-image" />
            <div className="card-body">
                <h5 className="card-title">Traditional Whot</h5>
                <p className="card-text">Enjoy a game of traditional whot and get your mind occupied. You can play alone or with your friends using the internet.</p>
                <a href="#" className="btn card_btn">Download</a>
            </div>
        </div>
     );
}
 
export default Cards;