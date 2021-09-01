import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   border: '1px solid #000',
  //   transition: '0.5s all ease-in-out'
  // })
 let mysecstyle = 
 {
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    border:props.mode==='dark'?'1px solid #aaa':'1px solid #E6E8EB'
  
 }
  return (
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743',}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={mysecstyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-controls="collapseOne"
              aria-expanded="true"
            >
              Analyze your Result
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mysecstyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditii
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mysecstyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mysecstyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nam beatae magnam, at aperiam voluptate molestias culpa assumenda perspiciatis ut est maiores nobis voluptatum. Fugit, quis! Pariatur illum non earum!
              Sit neque minus obcaecati similique praesentium, atque, eius beatae illo expedita quae nam explicabo earum! Magni molestias facere quis maiores fugit eveniet a nulla reprehenderit. Inventore earum harum autem aperiam.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mysecstyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mysecstyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mysecstyle} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem debitis distinctio ipsum numquam deserunt. Tempora, dolorem adipisci? Molestias est labore eaque omnis maiores eveniet itaque eligendi suscipit vero sint?
              Reiciendis fuga modi atque unde libero. Incidunt nam alias fugit explicabo placeat sapiente velit eligendi asperiores maxime recusandae ipsum, ex, temporibus, magni distinctio ut quam? Praesentium blanditiis debitis facilis laborum!
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
