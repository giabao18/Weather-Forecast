import styles from "./Home.module.scss"
import classNames from "classnames/bind";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import searchService from "~/apiServices/searchService";

const cx = classNames.bind(styles);



function Home() {
    // var searchInput = document.querySelector('.search-input');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`


    const [searchResult, setSearchResult] = useState([]);
    const [searchLocation, setSearchLocation] = useState('Da Nang');
    const [listResult, setListResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');

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

    useEffect =() => {
        setTimeout(() => {
            setSearchLocation([1,2,3]);
        },0);

        if(!searchLocation.trim()) {
            searchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const  result = await searchService.search(searchLocation)
            setSearchResult(result);

            setLoading(false);
        }

        fetchAPI();

        // fetch("6eed0a0e-3508-11ed-b3fe-0242ac130002-6eed0a5e-3508-11ed-b3fe-0242ac130002")
        //     .then((res) => JSON.res)
        //     .then((res) => {
                
        //     })
        // request.get('')

    ,[searchLocation]}

    const searching = (value) => {
        setSearchResult(prev => [prev, value]);
    }

    const handleClear = () => {
        setSearchResult([])
        setSearchLocation('')
        inputRef.current.focus();

    }


    return (
        <body className={cx('wrapper')}>
            <div className={cx("inner")}>
                <div className={cx("search")}>

                    <div className={cx("input-container")}>
                        <input className={cx('search-input')} type="text" placeholder="search location" spellCheck={false}
                            value={searchLocation}
                            ref={inputRef}
                            onChange={e => setSearchLocation(e.target.value)}
                            onFocus={() => setListResult()}
                            
                        />
                    </div>


                    {!!searchLocation && !loading &&
                        (<button className={cx('clear')} onClick={() => handleClear()}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)
                    }


                    {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

                    <button className={cx("search-btn")}
                        onKeyPress
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    <div className="actions"></div>
                </div>
            </div>


        </body >
    );
}

export default Home;