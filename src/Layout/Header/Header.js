import React from "react";
import './Header.css';
function Header(props) {
    const nav_list_menu = [
        {
            id: 1,
            name: "Swap",
            link: "#",
            classList: 'active_link',
        },
        {
            id: 2,
            name: "Liquidity",
            link: "#",
            classList: '',

        },
        {
            id: 3,
            name: "Staking",
            link: "#",
            classList: '',

        },
        {
            id: 4,
            name: "Farm",
            link: "#",
            classList: '',

        },
        {
            id: 5,
            name: "Reward",
            link: "#",
            classList: '',
        },
    ];
    return (
        <header id="Header">
            <div className="section_container">
                <nav id="header_nav">
                    <a href="#" className="logo_link">
                        <img src={require('../../Static/img/logo.png')} alt="logo" />
                    </a>
                    <ul className="nav_list_menu">
                        {nav_list_menu.map(v => {
                            return (
                                <li key={v.id}>
                                    <a href={v.link} className={v.classList}>
                                        {v.name}
                                    </a>
                                </li>
                            )
                        })}

                    </ul>

                    <ul className="nav_list_user">
                        <li>
                            <button className="nav_light_btn">
                                <img src={require('../../Static/img/icons/icon1.png')} alt="icon" />  $0.0055
                            </button>
                        </li>
                        <li>
                            <button className="nav_light_btn">
                                <img src={require('../../Static/img/icons/icon2.png')} alt="icon" />  $0.0055
                            </button>
                        </li>
                        <li>
                            <button className="nav_light_btn">
                                <img src={require('../../Static/img/icons/icon3.png')} alt="icon" /> $0.0004
                            </button>
                        </li>

                        <li>
                            <button className="connect_btn">
                                Connect Wallet
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
