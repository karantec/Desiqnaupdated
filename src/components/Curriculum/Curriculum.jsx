import React, { useState } from "react";
import Info from "./components/Info";
import FullStack from "./components/Fullstack";
import { componentData } from "./data/data";

const Curriculum = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [comp, setComp] = useState(    <Info
    h1={componentData.component1.heading1}
    p1={componentData.component1.para1}
    h2={componentData.component1.heading2}
    p2={componentData.component1.para2}
    h3={componentData.component1.heading3}
    p3={componentData.component1.para3}
    h4={componentData.component1.heading4}
    p4={componentData.component1.para4}
    h5={componentData.component1.heading5}
    p5={componentData.component1.para5}
    h6={componentData.component1.heading6}
    p6={componentData.component1.para6}
    h7={componentData.component1.heading7}
    p7={componentData.component1.para7}
    h8={componentData.component1.heading8}
    p8={componentData.component1.para8}
    h9={componentData.component1.heading9}
    p9={componentData.component1.para9}
    h10={componentData.component1.heading10}
    p10={componentData.component1.para10}
    h11={componentData.component1.heading11}
    p11={componentData.component1.para11}
    h12={componentData.component1.heading12}
    p12={componentData.component1.para12}
    h13={componentData.component1.heading13}
    p13={componentData.component1.para13}
    h14={componentData.component1.heading14}
    p14={componentData.component1.para14}
    h15={componentData.component1.heading15}
    p15={componentData.component1.para15}
    h16={componentData.component1.heading16}
    p16={componentData.component1.para16}
    h17={componentData.component1.heading17}
    p17={componentData.component1.para17}
    h18={componentData.component1.heading18}
    p18={componentData.component1.para18}
    h19={componentData.component1.heading19}
    p19={componentData.component1.para19}
    h20={componentData.component1.heading20}
    p20={componentData.component1.para20}
    h21={componentData.component1.heading21}
    p21={componentData.component1.para21}
    h22={componentData.component1.heading22}
    p22={componentData.component1.para22}
  />);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the active button
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 mt-[-1rem] overflow-x-hidden">
      <h1 className="font-bold text-xl lg:text-4xl mt-20 mb-[3rem] ">
        What will you Study in the Course?
      </h1>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center justify-center ">
        <div>
          <button
          role="button"
            onClick={() => {
              handleButtonClick("button1");
              setComp( <Info
                h1={componentData.component1.heading1}
                p1={componentData.component1.para1}
                h2={componentData.component1.heading2}
                p2={componentData.component1.para2}
                h3={componentData.component1.heading3}
                p3={componentData.component1.para3}
                h4={componentData.component1.heading4}
                p4={componentData.component1.para4}
                h5={componentData.component1.heading5}
                p5={componentData.component1.para5}
                h6={componentData.component1.heading6}
                p6={componentData.component1.para6}
                h7={componentData.component1.heading7}
                p7={componentData.component1.para7}
                h8={componentData.component1.heading8}
                p8={componentData.component1.para8}
                h9={componentData.component1.heading9}
                p9={componentData.component1.para9}
                h10={componentData.component1.heading10}
                p10={componentData.component1.para10}
                h11={componentData.component1.heading11}
                p11={componentData.component1.para11}
                h12={componentData.component1.heading12}
                p12={componentData.component1.heading12}
                h13={componentData.component1.heading13}
                p13={componentData.component1.para13}
                h14={componentData.component1.heading14}
                p14={componentData.component1.para14}
                h15={componentData.component1.heading15}
                p15={componentData.component1.para15}
                h16={componentData.component1.heading16}
                p16={componentData.component1.para16}
                h17={componentData.component1.heading17}
                p17={componentData.component1.para17}
                h18={componentData.component1.heading18}
                p18={componentData.component1.para18}
                h19={componentData.component1.heading19}
                p19={componentData.component1.para19}
                h20={componentData.component1.heading20}
                p20={componentData.component1.para20}
                h21={componentData.component1.heading21}
                p21={componentData.component1.para21}
                h22={componentData.component1.heading22}
                p22={componentData.component1.para22}
              />);
            }}
            className={`rounded-xl  w-[17rem] p-4 text-white font-bold bg-red-500 ${
              activeButton === "button1" ? "bg-red-500" : "bg-yellow-500"
            }`}
          >
            DSA From Scratch To Advanced
          </button>
        </div>
        <div>
          <button
          role="button"
            onClick={() => {
              handleButtonClick("button2");
              setComp( <Info
                h1={componentData.component1.heading1}
                p1={componentData.component1.para1}
                h2={componentData.component1.heading2}
                p2={componentData.component1.para2}
                h3={componentData.component1.heading3}
                p3={componentData.component1.para3}
                h4={componentData.component1.heading4}
                p4={componentData.component1.para4}
                h5={componentData.component1.heading5}
                p5={componentData.component1.para5}
                h6={componentData.component1.heading6}
                p6={componentData.component1.para6}
                h7={componentData.component1.heading7}
                p7={componentData.component1.para7}
                h8={componentData.component1.heading8}
                p8={componentData.component1.para8}
                h9={componentData.component1.heading9}
                p9={componentData.component1.para9}
                h10={componentData.component1.heading10}
                p10={componentData.component1.para10}
                h11={componentData.component1.heading11}
                p11={componentData.component1.para11}
                h12={componentData.component1.heading12}
                p12={componentData.component1.heading12}
                h13={componentData.component1.heading13}
                p13={componentData.component1.para13}
                h14={componentData.component1.heading14}
                p14={componentData.component1.para14}
                h15={componentData.component1.heading15}
                p15={componentData.component1.para15}
                h16={componentData.component1.heading16}
                p16={componentData.component1.para16}
                h17={componentData.component1.heading17}
                p17={componentData.component1.para17}
                h18={componentData.component1.heading18}
                p18={componentData.component1.para18}
                h19={componentData.component1.heading19}
                p19={componentData.component1.para19}
                h20={componentData.component1.heading20}
                p20={componentData.component1.para20}
                h21={componentData.component1.heading21}
                p21={componentData.component1.para21}
                h22={componentData.component1.heading22}
                p22={componentData.component1.para22}
              />);
            }}
            className={`rounded-xl  w-[17rem] p-4 text-white font-bold ${
              activeButton === "button2" ? "bg-red-500" : "bg-yellow-500"
            }`}
          >
            DSA Training for OA+Interview{" "}
          </button>
        </div>
        <div>
          <button
          role="button"
            onClick={() => {
              handleButtonClick("button3");
              setComp(
                <Info
    h1={componentData.component1.heading1}
    p1={componentData.component1.para1}
    h2={componentData.component1.heading2}
    p2={componentData.component1.para2}
    h3={componentData.component1.heading3}
    p3={componentData.component1.para3}
    h4={componentData.component1.heading4}
    p4={componentData.component1.para4}
    h5={componentData.component1.heading5}
    p5={componentData.component1.para5}
    h6={componentData.component1.heading6}
    p6={componentData.component1.para6}
    h7={componentData.component1.heading7}
    p7={componentData.component1.para7}
    h8={componentData.component1.heading8}
    p8={componentData.component1.para8}
    h9={componentData.component1.heading9}
    p9={componentData.component1.para9}
    h10={componentData.component1.heading10}
    p10={componentData.component1.para10}
    h11={componentData.component1.heading11}
    p11={componentData.component1.para11}
    h12={componentData.component1.heading12}
    p12={componentData.component1.heading12}
    h13={componentData.component1.heading13}
    p13={componentData.component1.para13}
    h14={componentData.component1.heading14}
    p14={componentData.component1.para14}
    h15={componentData.component1.heading15}
    p15={componentData.component1.para15}
    h16={componentData.component1.heading16}
    p16={componentData.component1.para16}
    h17={componentData.component1.heading17}
    p17={componentData.component1.para17}
    h18={componentData.component1.heading18}
    p18={componentData.component1.para18}
    h19={componentData.component1.heading19}
    p19={componentData.component1.para19}
    h20={componentData.component1.heading20}
    p20={componentData.component1.para20}
    h21={componentData.component1.heading21}
    p21={componentData.component1.para21}
    h22={componentData.component1.heading22}
    p22={componentData.component1.para22}
  />);
            }}
            className={`rounded-xl w-[17rem] p-4 text-white font-bold ${
              activeButton === "button3" ? "bg-red-500" : "bg-yellow-500"
            }`}
          >
            Competitive Programming
          </button>
        </div>
        <div>
          <button
          role="button"
            onClick={() => {
              handleButtonClick("button4");
              setComp(<FullStack
                h1={componentData.component4.heading1}
                h2={componentData.component4.heading2}
                h3={componentData.component4.heading3}
                h4={componentData.component4.heading4}
                h5={componentData.component4.heading5}
                h6={componentData.component4.heading6}
                h7={componentData.component4.heading7}
                h8={componentData.component4.heading8}
                h9={componentData.component4.heading9}
                h10={componentData.component4.heading10}
                h11={componentData.component4.heading11}
                h12={componentData.component4.heading12}
              />);
            }}
            className={`rounded-xl w-[17rem] p-4 text-white font-bold ${
              activeButton === "button4" ? "bg-red-500" : "bg-yellow-500"
            }`}
          >
            Full Stack Development
          </button>
        </div>
      </div>
      <div className="mt-20 px-[15rem]">{comp}</div>
    </div>
  );
};

export default Curriculum;
