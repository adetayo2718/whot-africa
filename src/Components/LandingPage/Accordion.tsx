const FaqAccordion = () => {
    return ( 
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
     );
}
 
export default FaqAccordion;