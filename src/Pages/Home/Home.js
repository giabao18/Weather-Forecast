import styles from "./Home.module.scss"
import classNames from "classnames/bind";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);



function Home() {
    // var searchInput = document.querySelector('.search-input');

    const [searchResult, setSearchResult] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const [listResult, setListResult] = useState(true);

    const inputRef = useRef();

    // const getParent = (inputElement,value) => {
    //     while(inputElement.parent) {
    //         if(inputElement.parent.matchers(value)) {
    //             return inputElement.parent;
    //         }
    //         inputElement = inputElement.parent();
    //     }
    // }

    // const searchDisplay = (inputElement) => {
    //     if(inputElement) {
    //         var check = getParent(inputElement,document.querySelector('.clear'));
    //         // check.classList.add('valid');
    //     }
    // }

    const handleClear = () => {
        setSearchResult([])
        setSearchValue('')
        inputRef.current.focus();

    }


    return (
        <body className={cx('wrapper')}>
            <div className={cx("inner")}>
                <div className={cx("search")}>

                    <div className={cx("input-container")}>
                        <input className={cx('search-input')} type="text" placeholder="search location" spellCheck={false}
                            value={searchValue}
                            ref={inputRef}
                            onChange={e => setSearchValue(e.target.value)}
                            onFocus={() => setListResult()}
                        />
                    </div>


                    {!!searchValue &&
                        (<button className={cx('clear')} onClick={() => handleClear()}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)
                    }


                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    <div className="actions"></div>
                </div>
            </div>


        </body >
    );
}

export default Home;