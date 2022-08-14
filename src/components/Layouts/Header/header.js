import styles from "./header.module.scss"
import classnames from "classnames/bind";
import images from "~/Assets/images";

const cx = classnames.bind(styles)

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="GB-Weather Forecast" />
                <h1 className={cx('website-title')}>Weather Forecast</h1>
            </div>
        </header>
    );
}

export default Header;


