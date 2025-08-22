import React from "react";
import "./App.css";
import Slider from "./slider logic/ImageCompare"

import Img1 from "./assets/section1.png"
import Img2 from "./assets/section2.png"
import Img3 from "./assets/section3.gif"
import Img4 from "./assets/section4.jpg"

import Icon1 from "./assets/icon1.png"
import Icon2 from "./assets/icon2.png"
import Icon3 from "./assets/icon3.png"
import Icon4 from "./assets/icon4.png"
import Shield from "./assets/verified.png"


function App() {
  return (
    <div className="page-container">
      {/* Section 1 */}
      <section className="section section-top">
        <h2 className="title">
          What makes us different <br />
          makes them stronger
        </h2>

        <div className="features-container">
          {/* Left Features */}
          <div className="features">
            <div className="feature">
              <div className="icon green"><img src={Icon1} alt=""/></div>
              <div>
                <h3>Real Food</h3>
                <p>Wholesome recipes for dogs with real meat and veggies.</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon yellow"><img src={Icon2} alt=""/></div>
              <div>
                <h3>Premium Ingredient</h3>
                <p>Elevating pet care with unmatched safety and quality.</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="image-bowl">
            <Slider/>
          </div>

          {/* Right Features */}
          <div className="features">
            <div className="feature">
              <div className="icon blue"><img src={Icon3} alt=""/></div>
              <div>
                <h3>Made Fresh</h3>
                <p>We prioritize maintaining the integrity of whole foods and nutrition.</p>
              </div> 
            </div>
            <div className="feature">
              <div className="icon red"><img src={Icon4} alt=""/></div>
              <div>
                <h3>Vet Developed</h3>
                <p>We raise the bar for dog nutrition, surpassing industry expectations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta">
          <button className="btn-orange">Get your dog's healthy meal today!</button>
          <div className="guarantee">
            <span><span className="payments"><img src={Shield} alt="" /></span> 30-day money back guarantee</span>
            <span className="payments">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
              />
              <img
                src="https://www.svgrepo.com/show/303191/apple-pay-logo.svg" alt="Apple Pay" style={{ height: "30px", marginTop: "10px"}}/>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                alt="Google Pay"
                style={{ height: "25px" }}
              />
            </span>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section2">
        <div className="content-wrapper">
          {/* Text */}
          <div className="text-block">
            <div className="sec1">
              <h2 className="section-heading">Nutrition is the foundation for longer, healthier lives in dogs.</h2>
              <p className="description">
                Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
              </p>
            </div>
            <div className="sec2">
              <ul className="key-points">
                <h2>Key Points:</h2>
                <li>
                  <span className="highlight">97%</span>
                  <span>Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</span>
                </li>
                <li>
                  <span className="highlight">84%</span>
                  <span>Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</span>
                </li>
                <li>
                  <span className="highlight">92%</span>
                  <span>Our dog food’s high protein and fat digestibility contribute to ideal stool quality.</span>
                </li>
              </ul>
            </div>


            <button className="btn-orange">Give your furry friend the gift of wholesome nutrition</button>
          </div>

          {/* Image */}
          <div className="image-dog">
            <img
              src={Img2}
              alt="Dog with food"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section3">
        <div className="content-wrapper">
          {/* Image */}
          <div className="image-dog">
            <img
              src={Img3}
              alt="Dog with food"
            />
          </div>

          {/* Text */}
          <div className="text-block">
            <div className="sec1">
              <h2 className="section-heading">Improve overall gastrointestinal health for better nutrient absorption</h2>
              <p className="description">
                Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section section4">
        <div className="content-wrapper">
          {/* Text */}
          <div className="text-block">
            <div className="sec1">
              <h2 className="section-heading">
                Prebiotics nourish the beneficial gut bacteria, supporting digestive health
              </h2>
              <p className="description">
                Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="image-dog">
            <img src={Img4} alt="Dog with food" />
          </div>
        </div>
      </section>
      
    </div>
  );
}
export default App