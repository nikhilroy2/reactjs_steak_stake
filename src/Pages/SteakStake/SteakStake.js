import React from "react";
import "./SteakStake.css";
function SteakStake(props) {
  return (
    <div id="SteakStake">
      <div className="section_container">
        <div className="section_title">
          <h2 className="title">Farms</h2>
        </div>
        <div className="section_body">
          <div className="section_flex">
            <div className="flex_box">
              <div className="meat_box">
                <strong>Meat Earned</strong>
                <strong>0.000</strong>
                <span>~$0.0055</span>

                <svg
                  width={10}
                  height={10}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <circle
                      cx={5}
                      cy={5}
                      r="3.75"
                      stroke="#664900"
                      strokeWidth="0.833333"
                    />
                    <circle
                      cx="4.99996"
                      cy="7.49999"
                      r="0.208333"
                      fill="#664900"
                      stroke="#664900"
                      strokeWidth="0.416667"
                    />
                    <path
                      d="M5 6.66666V6.07546C5 5.68203 5.25176 5.33274 5.625 5.20832V5.20832C5.99824 5.08391 6.25 4.73462 6.25 4.34118V4.12736C6.25 3.45871 5.70795 2.91666 5.03929 2.91666H5C4.30964 2.91666 3.75 3.4763 3.75 4.16666V4.16666"
                      stroke="#664900"
                      strokeWidth="0.833333"
                    />
                  </g>
                </svg>

                <img
                  className="img_frame"
                  src={require("../../Static/img/meat_box_frame.png")}
                  alt="img"
                />
              </div>
              <ul className="flex_box_list_content">
                <li>
                  Ready to claim :<strong>0.000</strong>
                </li>
                <li>
                  To be claimed in 15 days :<strong>0.000</strong>
                </li>
                <li>
                  (Auto renew 15 days release when you harvest <br /> again)
                </li>

                <li>
                  <button className="btn_connect_wallet">Connect Wallet</button>
                </li>
              </ul>
            </div>
            <div className="flex_box wallet_balance_flex">
              <ul className="wallet_balance_list">
                <li>
                  <img src={require("../../Static/img/img_b.png")} alt="" />
                  <div className="content_box">
                    <h3>BITX Wallet Balance</h3>
                    <strong>0.0000</strong>
                    <span>~$0.0000</span>
                  </div>
                  <div className="btn_box">
                    <button>Buy BITX</button>
                  </div>
                </li>

                <li>
                  <img style={{height: '2.5rem', marginLeft: '1.2rem'}}
                    src={require("../../Static/img/meat_box_frame.png")}
                    alt=""
                  />
                  <div className="content_box">
                    <h3>Meat Wallet Balance</h3>
                    <strong>0.0000</strong>
                    <span>~$0.0000</span>
                  </div>
                  <div className="btn_box">
                    <button>Buy Meat</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SteakStake;
