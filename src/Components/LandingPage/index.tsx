import FaqAccordion from './Accordion';
import Card from './SectionThreeCard';
import Cards from './SectonTwoCard';
import './style.scss'

type cardDetailType={
    cardImg: string
    cardAlt: string
    cardTitle: string
    cardText: string
    cardBtn: string
}
const cardDetail:cardDetailType[] = [
    {
        cardTitle:'Traditional Whot',
        cardText:'Enjoy a game of traditional whot and get your mind occupied. You can play alone or with your friends using the internet',
        cardImg:'https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196597/Rectangle_14_2_hdszcc.png',
        cardAlt:'game-image',
        cardBtn: 'Download'
    },
    {
        cardTitle:'Traditional Whot',
        cardText:'Enjoy a game of traditional whot and get your mind occupied. You can play alone or with your friends using the internet',
        cardImg:'https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689194936/Rectangle_14_vgwuql.png',
        cardAlt:'game-image',
        cardBtn: 'Download'
    },
    {
        cardTitle:'Traditional Whot',
        cardText:'Enjoy a game of traditional whot and get your mind occupied. You can play alone or with your friends using the internet',
        cardImg:'https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196589/Rectangle_14_1_rctmea.png',
        cardAlt:'game-image',
        cardBtn: 'Download'
    },
    {
        cardTitle:'Traditional Whot',
        cardText:'Enjoy a game of traditional whot and get your mind occupied. You can play alone or with your friends using the internet',
        cardImg:'https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196589/Rectangle_14_1_rctmea.png',
        cardAlt:'game-image',
        cardBtn: 'Download'
    },
    {
        cardTitle:'Traditional Whot',
        cardText:'Enjoy a game of traditional whot and get your mind occupied. You can play alone or with your friends using the internet',
        cardImg:'https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196605/Rectangle_14_3_laerdp.png',
        cardAlt:'game-image',
        cardBtn: 'Download'
    }];

    type sectionThreeCardType = {
        cardTitle: string
        cardText: string
    }
    const sectionThreeCardDetail:sectionThreeCardType[] =[
        {
            cardTitle:'How to start a game',
            cardText:'A brief showcase of how to enjoy the game with your friends'
        },
        {
            cardTitle:'How to start a game',
            cardText:'A brief showcase of how to enjoy the game with your friends'
        },
        {
            cardTitle:'How to start a game',
            cardText:'A brief showcase of how to enjoy the game with your friends'
        },
        {
            cardTitle:'How to start a game',
            cardText:'A brief showcase of how to enjoy the game with your friends'
        }  
    ]



const LadningPage = () => (
    <>
        {/* Fist-Page */}
        <section className="index-section">
            <div className="container ">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='background-text'>
                        <h1 className='py-1'>Enjoy Your Favourite</h1>
                        <h1>indigenous African Games</h1>
                        <p className=' mt-4'>You can enjoy your favourite indigernous games on your devices <br /> and rekindle your love for them. They are our games and they <br /> are our pride. Simply click to download one for your device.</p>
                        <div className='py-4'>
                            <img className='app-image' src="https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689624239/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_1_wlumpd.png" alt="" />
                            <img src="https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689624318/g12_kqydkd.png" alt="" />
                        </div>
                    </div>
                    <img className='image' src="https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689191856/g8_kgcczw.png" alt="" />
                </div>
            </div>

        </section>

        {/* Our Game Section */}
        <section className='our-game p-5'>
            <div className="container">
                <div className=' container h1-text'>
                    <h2 className=''>Our Games</h2>
                    <p>We have the following games available on our <br />mobiles</p>
                </div>

                <div className="container card_container">
                    <div className='row g-4 d-flex justify-content-between'>
                        {cardDetail.map((element)=>(
                            <div className="col-4">
                            <Cards
                            cardImg={element.cardImg}
                            cardAlt={element.cardAlt}
                            cardTitle={element.cardTitle}
                            cardText={element.cardText}
                            cardBtn = {element.cardBtn}
                        /></div>))}
                        
                    </div>
                </div>
            </div>
        </section>

        {/* Games tutorial*/}
        <section className="whole-tutorial-section">
            <div className="container p-3">
                <div className="text">
                    <h1>Games tutorials</h1>
                    <p>Let us show you some best ways to <br /> enjoy the games we have.</p>
                </div>
                <div className='d-flex justify-content-start mt-5 media-container'>
                    <div className="container container_video_text">
                        <video className='my-3' width="650" height="300" controls>
                            <source src="https://res.cloudinary.com/dvgkyxjsa/video/upload/v1689498394/Download_u8hedl.mp4" />
                        </video>
                        <div>
                            <div className="">
                                <div className="mt-2">
                                    <h4 fw-bold>How to start a game</h4>
                                    <p>We will lead you through the basic <br /> knowledge you need to start the game</p>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <p className=''>Previous</p>
                                    <p className='mx-5'>Next</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="start-container">
                        <div className="row cards">
                            <div className="container">
                                {sectionThreeCardDetail.map((elem)=>(
                                    <Card
                                    cardTitle= {elem.cardTitle}
                                    cardText= {elem.cardText}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Frequently asked questions*/}
        <section>
            <div className="whole-question-page">
                <div className='container py-5 question-text'>
                    <h1>Frequently asked questions</h1>
                    <p>Incase you have some questions for us, kindly go through <br /> this section first before you contact our Customer Support</p>
                </div>
                <div className='d-flex justify-content-start'>
                    <img src="https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689522985/Rectangle_35_xev2x4.png" alt="card logo" />

                    <div className='px-4 accordion-style'>
                        <div className="accordion" id="game-questions ">
                            <FaqAccordion/>
                            <FaqAccordion/>
                            <FaqAccordion/>
                            <FaqAccordion/>
                            <FaqAccordion/>
                            <FaqAccordion/>
                        </div>     
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Us*/}
        <section className='whole-contact-page' >
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h3 className='text my-5'>
                        For more enquiries, <br /> you can contact us <br /> here or send a <br /> message to us:
                    </h3>
                    <div className='form-style'>
                        <div className="mb-4 form-style ">
                            <input type="email" className="form-control form-controls" placeholder="Enter full name"/>
                        </div>
                        <div className="mb-5">
                            <input type="email" className="form-control form-controls" placeholder="name@example.com"/>
                        </div>
                        <div className="">
                            <textarea className="form-control form-controls" rows={6} placeholder='Comments'></textarea>
                        </div>
                        <div className="btn m-3 p-2 px-4 btn-style">
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

    </>

)
 
export default LadningPage;