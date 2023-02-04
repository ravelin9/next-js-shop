import Link from "../node_modules/next/link";
import styles from "../styles/A.module.css";

export default function A({ text, href }) {
    return (
        <Link href={href} legacyBehavior>
            <a className={styles.link}>{text}</a>
        </Link>
    );
}
