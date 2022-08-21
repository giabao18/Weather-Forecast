import styles from "./Home.module.scss"
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);



function Home() {


    return (
        <body className={cx('weatherForecast-box')}>
            {/* <div className={cx("app")}>
                <div className={cx("cardList")}>
                    <button className={cx("cardList__btn btn btn--left")}>
                        <div className={cx("icon")}>
                            <svg>
                                <use xlinkHref="#arrow-left" />
                            </svg>
                        </div>
                    </button>
                    <div className={cx("cards__wrapper")}>
                        <div className={cx("card current--card")}>
                            <div className={cx("card__image")}>
                                <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                            </div>
                        </div>
                        <div className={cx("card next--card")}>
                            <div className={cx("card__image")}>
                                <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                            </div>
                        </div>
                        <div className={cx("card previous--card")}>
                            <div className={cx("card__image")}>
                                <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                            </div>
                        </div>
                    </div>
                    <button className={cx("cardList__btn btn btn--right")}>
                        <div className={cx("icon")}>
                            <svg>
                                <use xlinkHref="#arrow-right" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className={cx("infoList")}>
                    <div className={cx("info__wrapper")}>
                        <div className={cx("info current--info")}>
                            <h1 className={cx("text name")}>Highlands</h1>
                            <h4 className={cx("text location")}>Scotland</h4>
                            <p className={cx("text description")}>The mountains are calling</p>
                        </div>
                        <div className={cx("info next--info")}>
                            <h1 className={cx("text name")}>Machu Pichu</h1>
                            <h4 className={cx("text location")}>Peru</h4>
                            <p className={cx("text description")}>Adventure is never far away</p>
                        </div>
                        <div className={cx("info previous--info")}>
                            <h1 className={cx("text name")}>Chamonix</h1>
                            <h4 className={cx("text location")}>France</h4>
                            <p className={cx("text description")}>Let your dreams come true</p>
                        </div>
                    </div>
                </div>
                <div className={cx("app__bg")}>
                    <div className={cx("app__bg__image current--image")}>
                        <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                    </div>
                    <div className={cx("app__bg__image next--image")}>
                        <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                    </div>
                    <div className={cx("app__bg__image previous--image")}>
                        <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                    </div>
                </div>
            </div>
            <div className={cx("loading__wrapper")}>
                <div className={cx("loader--text")}>Loading...</div>
                <div className={cx("loader")}>
                    <span />
                </div>
            </div>
            <svg className={cx("icons")} style={{ display: "none" }}>
                <symbol
                    id="arrow-left"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <polyline
                        points="328 112 184 256 328 400"
                        style={{
                            fill: "none",
                            stroke: "#fff",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 48
                        }}
                    />
                </symbol>
                <symbol
                    id="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <polyline
                        points="184 112 328 256 184 400"
                        style={{
                            fill: "none",
                            stroke: "#fff",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 48
                        }}
                    />
                </symbol>
            </svg>
            <div className={cx("support")}>
                <a href="https://twitter.com/DevLoop01" target="_blank">
                    <i className={cx("fab fa-twitter-square")} />
                </a>
                <a href="https://dribbble.com/devloop01" target="_blank">
                    <i className={cx("fab fa-dribbble")} />
                </a>
            </div> */}


            <div className={cx('weatherForecast-box-nav')}>
                <button className={cx("Search-icon")}>
                    <FontAwesomeIcon icon="fa-magnifying-glass" />
                </button>
                <input  type="text" placeholder="search location" />
            </div>


        </body >
    );
}

export default Home;