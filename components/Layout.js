import A from "./A";
import Head from "next/head";
import styles from "../styles/Layout.module.css"
import Image from "next/image"
import Logo from "../assets/logo.png"
const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta
                    key="YORCOM"></meta>
                <title>YORCOM</title>
            </Head>
            <div className={styles.navbar}>

                <A href={"/"} text={<Image
                    src={Logo}
                    alt="YORCOM"
                    title="YORCOM"
                    width={135}
                height={24}/>}
                clas={"text-white"}/>
                <A href={"/products"} text="Диваны"/>
            </div>
            <div>
                {children}
            </div>

        </>
    )
}

export default Layout;