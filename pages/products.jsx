import Layout from "../components/Layout";
import Link from "../node_modules/next/link";
import styles from "../styles/Products.module.css"
const Products = ({ products }) => {
    return (
        <Layout><div>
            <h1 className="text-3xl font-bold ">Диваны</h1>
            <div className={styles.cards}>
                {products.map((product) => (
                    <div className={"block bg-slate-100 rounded-xl dark:bg-neutral-300 m-1"} key={product.id}>
                        <Link href={`/products/${product.id}`} legacyBehavior>
                            <a className={'block h-full p-9'}>{product.name}</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div></Layout>

    );
};

export default Products;

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:3003/products`);
    const products = await response.json();
    return {
        props: { products }, // will be passed to the page component as props
    };
}
