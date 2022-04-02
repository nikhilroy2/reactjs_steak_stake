import React, { useState } from "react";
import "./SteakStake.css";
import CalculatorsSvg from "../../Components/Icons/SvgIcons/CalculatorsSvg";
function SteakStake(props) {
  return (
    <div id="SteakStake">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  );
}

export default SteakStake;

const Section1 = () => {
  return (
    <section id="Section1">
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
                  style={{ cursor: "pointer" }}
                  title="title"
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
                  <img
                    style={{ height: "2.5rem", marginLeft: "1.2rem" }}
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
    </section>
  );
};

const Section2 = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <section id="Section2">
      <div className="section_container">
        <div className="section_body">
          <div className="section_box_wrapper">
            <div className="section_body_box_1">
              <img src={require("../../Static/img/img_b.png")} alt="img" />
              <ul className="section_content_list">
                <li>VIP Pool</li>
                <li>Stake BITX to earn BUSD and User Tier</li>
                <li>
                  APR 33.08% <CalculatorsSvg />
                </li>
                <li>
                  Total Staked
                  <strong>4,445,998.00 BITX</strong>
                </li>
              </ul>
            </div>
            <div className="section_body_box_2">
              <div className="section_box_2_content">
                <ul className="section_content_list">
                  <li>
                    Your current tier <span>No Tier</span>
                  </li>
                  <li>Token will be locked 30 days</li>

                  <li>
                    <span>Earned</span>
                    <strong>0.000</strong>
                  </li>
                  <li className="dropdown_btn_list_wrapper">
                    <button
                      className="dropdown_btn"
                      onClick={() => setToggleDropdown(!toggleDropdown)}
                    >
                      {toggleDropdown ? "Hide" : "Detail"}
                      {toggleDropdown ? (
                        <svg
                          style={{ transform: "scaleY(-1)" }}
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 8.75L7.41248 9.16248L7 9.57496L6.58752 9.16248L7 8.75ZM10.9125 5.66248L7.41248 9.16248L6.58752 8.33752L10.0875 4.83752L10.9125 5.66248ZM6.58752 9.16248L3.08752 5.66248L3.91248 4.83752L7.41248 8.33752L6.58752 9.16248Z"
                            fill="#FAB674"
                          />
                        </svg>
                      ) : (
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 8.75L7.41248 9.16248L7 9.57496L6.58752 9.16248L7 8.75ZM10.9125 5.66248L7.41248 9.16248L6.58752 8.33752L10.0875 4.83752L10.9125 5.66248ZM6.58752 9.16248L3.08752 5.66248L3.91248 4.83752L7.41248 8.33752L6.58752 9.16248Z"
                            fill="#FAB674"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {toggleDropdown && (
              <div className="dropdown_content_box">
                <div className="content_box">
                  <ul>
                    <li>
                      <strong>Withdraw Fee 0%</strong>
                    </li>
                    <li>
                      <a href="#" className="content_link">
                        Get IDOL{" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="inline text-base ml-1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="content_link">
                        View contract{" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="inline text-base ml-1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content_box">
                  <div className="card_box">
                    <ul>
                      <li>
                        <strong>PEACH earned</strong>
                      </li>
                      <li>
                        <span>0.000</span>
                      </li>
                      <li>
                        <span>~$0.00</span>
                      </li>
                    </ul>
                    <button className="btn_harvest">Harvest</button>
                  </div>
                </div>
                <div className="content_box">
                  <div className="card_box mx_0">
                    <strong className="mb_sizer">Start Staking</strong>
                    <button className="btn_connect_wallet">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section3 = () => {
  const [tabActive, setTabActive] = useState(true);

  const token_list_object = [
    {
      id: 1,
      token_img: require("../../Static/img/t.png"),
      token_name: "USDT-BITX",
      token_rank: "5x",
      earned: "0.000",
      app: "160.22%",
      liquidity: "$85",
      details: {
        withdraw_fee: "0%",
        get_idol_link: "#",
        view_contract_link: "#",
        peach_earned_amount_1: "0.000",
        peach_earned_amount_2: "~$0.00",
        harvest_action: "#",
      },
    },
    {
      id: 2,
      token_img: require("../../Static/img/d.png"),
      token_name: "BUSD-BITX",
      token_rank: "10x",
      earned: "0.000",
      app: "250.22%",
      liquidity: "$850",
      details: {
        withdraw_fee: "0%",
        get_idol_link: "#",
        view_contract_link: "#",
        peach_earned_amount_1: "0.000",
        peach_earned_amount_2: "~$0.00",
        harvest_action: "#",
      },
    },
    {
      id: 3,
      token_img: require("../../Static/img/x.png"),
      token_name: "BITX-USDT",
      token_rank: "20x",
      earned: "0.000",
      app: "560.22%",
      liquidity: "$782",
      details: {
        withdraw_fee: "0%",
        get_idol_link: "#",
        view_contract_link: "#",
        peach_earned_amount_1: "0.000",
        peach_earned_amount_2: "~$0.00",
        harvest_action: "#",
      },
    },
  ];

  const [isDropdownEnabled, setIsDropdownEnabled] = useState();
  // window.sessionStorage.removeItem("num");
  const dropdownDetailsHandle = (num) => {
    setIsDropdownEnabled(num);
    if (isDropdownEnabled == 0) {
      window.sessionStorage.removeItem("num");
    }
    if (window.sessionStorage.getItem("num") == num) {
      setIsDropdownEnabled(0);
    }
    window.sessionStorage.setItem("num", num);
  };
  return (
    <section id="Section3">
      <div className="section_container">
        <div className="section_title">
          <div className="section_tab_control">
            <div className="stakeBox">
              <input type="checkbox" name="" id="stakedCheckbox" />
              <label htmlFor="stakedCheckbox">Staked only</label>
            </div>
            <div className="tabBox">
              <button
                onClick={() => setTabActive(true)}
                className={tabActive ? 'active_btn': ''}
              >
                Active
              </button>
              <button
                onClick={() => setTabActive(false)}
                className={!tabActive ? 'active_btn': ''}
              >
                Inactive
              </button>
            </div>
          </div>
        </div>
        <div className="section_body">
          <div className="section_body_title">
            <h4 className="title">LP token</h4>
          </div>
          <div className="section_body_content">
            {tabActive ? (
              <ul className="lp_token_list">
                {token_list_object.map((v) => {
                  return (
                    <li key={v.id} onClick={() => dropdownDetailsHandle(v.id)}>
                      <div className="flex_list_box">
                        <div className="list_box">
                          <img
                            style={{ marginRight: "1rem" }}
                            src={v.token_img}
                            alt=""
                          />
                          <div className="currency_content">
                            <strong className="currency">{v.token_name}</strong>
                            <span className="rank">{v.token_rank}</span>

                            <div className="app_content">
                              APR
                              <strong>
                                {v.app} <CalculatorsSvg></CalculatorsSvg>
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="list_box">
                          Earned
                          <strong>{v.earned}</strong>
                        </div>
                        <div className="list_box">
                          APR
                          <strong>
                            {v.app} <CalculatorsSvg></CalculatorsSvg>
                          </strong>
                        </div>
                        <div className="list_box">
                          Liquidity
                          <strong>{v.liquidity}</strong>
                        </div>
                        <div className="list_box list_box_dropdown_details">
                          <button
                            className="btn_dropdown_details"
                            // onClick={() => dropdownDetailsHandle(v.id)}
                          >
                            <span>Details</span>
                            {isDropdownEnabled == v.id ? (
                              <svg
                                style={{ transform: "scaleY(-1)" }}
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 8.75L7.41248 9.16248L7 9.57496L6.58752 9.16248L7 8.75ZM10.9125 5.66248L7.41248 9.16248L6.58752 8.33752L10.0875 4.83752L10.9125 5.66248ZM6.58752 9.16248L3.08752 5.66248L3.91248 4.83752L7.41248 8.33752L6.58752 9.16248Z"
                                  fill="#FAB674"
                                />
                              </svg>
                            ) : (
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 8.75L7.41248 9.16248L7 9.57496L6.58752 9.16248L7 8.75ZM10.9125 5.66248L7.41248 9.16248L6.58752 8.33752L10.0875 4.83752L10.9125 5.66248ZM6.58752 9.16248L3.08752 5.66248L3.91248 4.83752L7.41248 8.33752L6.58752 9.16248Z"
                                  fill="#FAB674"
                                />
                              </svg>
                            )}
                          </button>

                          {/* for dropdown view letter */}
                          {/* <ul className="dropdown_details_view"><li></li></ul> */}
                        </div>
                      </div>

                      {isDropdownEnabled == v.id && (
                        <div className="dropdown_content_box">
                          <div className="content_box">
                            <ul>
                              <li className="sm_list">
                                Earned
                                <strong>{v.earned}</strong>
                              </li>
                              <li className="sm_list">
                                Liquidity
                                <strong>{v.liquidity}</strong>
                              </li>
                              <li>
                                <strong>
                                  Withdraw Fee {v.details.withdraw_fee}
                                </strong>
                              </li>
                              <li>
                                <a
                                  href={v.details.get_idol_link}
                                  className="content_link"
                                >
                                  Get IDOL{" "}
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    className="inline text-base ml-1"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                                    />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href={v.details.view_contract_link}
                                  className="content_link"
                                >
                                  View contract{" "}
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    className="inline text-base ml-1"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                                    />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content_box">
                            <div className="card_box">
                              <ul>
                                <li>
                                  <strong>PEACH earned</strong>
                                </li>
                                <li>
                                  <span>{v.details.peach_earned_amount_1}</span>
                                </li>
                                <li>
                                  <span>{v.details.peach_earned_amount_2}</span>
                                </li>
                              </ul>
                              <button className="btn_harvest">Harvest</button>
                            </div>
                          </div>
                          <div className="content_box">
                            <div className="card_box mx_0">
                              <strong className="mb_sizer">
                                Start Staking
                              </strong>
                              <button className="btn_connect_wallet">
                                Connect Wallet
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className="lp_token_list">
                <li className="token_empty">No farms staked.</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
