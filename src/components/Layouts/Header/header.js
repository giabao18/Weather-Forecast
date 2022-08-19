import styles from "./header.module.scss"
import classnames from "classnames/bind";
import images from "~/Assets/images";

const cx = classnames.bind(styles)

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* <img src="logo.png" alt="GB-Weather Forecast" /> */}
                <h1 className={cx('website-title')}>Weather <span className={styles.light}> Forecast </span> </h1>
            </div>
        </header>
    );
}

export default Header;


