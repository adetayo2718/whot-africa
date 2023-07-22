import Cards from './SectonCard';
import './style.scss'

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
                        <div className="col-4">
                            <Cards cardImg = "https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196597/Rectangle_14_2_hdszcc.png"/>
                            
                        </div>
                        <div className="col-4">
                            <Cards cardImg = "https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689194936/Rectangle_14_vgwuql.png" alt="game-image"/>
                        </div>
                        <div className="col-4">
                            <Cards cardImg = "https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196589/Rectangle_14_1_rctmea.png"/>
                        </div>
                    </div>
                    <div className="row g-4 d-flex justify-content-space my-4">
                        <div className="col-4">
                            <Cards cardImg = "https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196589/Rectangle_14_1_rctmea.png"/>
                        </div>
                        <div className="col-4">
                            <Cards cardImg= "https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689196605/Rectangle_14_3_laerdp.png" alt="game-image"/>
                        </div>
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>How to start a game</h4>
                                        </div>
                                        <div className="card-text">
                                            <p>A brief showcase of how to enjoy the game with your friends</p>
                                        </div>
                                        <div className="card-title">
                                            <h4>How to start a game</h4>
                                        </div>
                                        <div className="card-text">
                                            <p>A brief showcase of how to enjoy the game with your friends</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>How to start a game</h4>
                                        </div>
                                        <div className="card-text">
                                            <p>A brief showcase of how to enjoy the game with your friends</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>How to start a game</h4>
                                        </div>
                                        <div className="card-text">
                                            <p>A brief showcase of how to enjoy the game with your friends</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>How to start a game</h4>
                                        </div>
                                        <div className="card-text">
                                            <p>A brief showcase of how to enjoy the game with your friends</p>
                                        </div>
                                    </div>
                                </div>
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
                            <div className="accordion-item">
                                <h1 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                                       <h6>Will i be able to play the game without the internet?</h6> 
                                    </button>
                                </h1>
                                <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#game-questions">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure sit asperiores dolorum ex enim praesentium, quasi repellendus saepe. Distinctio perspiciatis exercitationem voluptates, dignissimos veniam obcaecati sequi pariatur magni praesentium.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h1 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                                        <h6>Will i be able to play the game without the internet?</h6> 
                                    </button>
                                </h1>
                                <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#game-questions">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, architecto facilis. Qui, corrupti laudantium? Cum doloribus optio et id excepturi possimus, voluptatem facilis perspiciatis corrupti voluptate exercitationem ut beatae mollitia.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h1 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                                        <h6>Will i be able to play the game without the internet?</h6> 
                                    </button>
                                </h1>
                                <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#game-questions">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis atque impedit cum praesentium debitis mollitia non unde odit velit tempore. Commodi, error tenetur alias laboriosam velit nisi cumque recusandae culpa.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h1 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-four">
                                        <h6>Will i be able to play the game without the internet?</h6> 
                                    </button>
                                </h1>
                                <div id="question-four" className="accordion-collapse collapse" data-bs-parent="#game-questions">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis atque impedit cum praesentium debitis mollitia non unde odit velit tempore. Commodi, error tenetur alias laboriosam velit nisi cumque recusandae culpa.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h1 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                                        <h6>Will i be able to play the game without the internet?</h6> 
                                    </button>
                                </h1>
                                <div id="question-five" className="accordion-collapse collapse" data-bs-parent="#game-questions">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis atque impedit cum praesentium debitis mollitia non unde odit velit tempore. Commodi, error tenetur alias laboriosam velit nisi cumque recusandae culpa.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h1 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-six">
                                        <h6>Will i be able to play the game without the internet?</h6> 
                                    </button>
                                </h1>
                                <div id="question-six" className="accordion-collapse collapse" data-bs-parent="#game-questions">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis atque impedit cum praesentium debitis mollitia non unde odit velit tempore. Commodi, error tenetur alias laboriosam velit nisi cumque recusandae culpa.
                                    </div>
                                </div>
                            </div>
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