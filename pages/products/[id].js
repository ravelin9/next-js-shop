
import Layout from "../../components/Layout";
import {useRouter} from "next/router";

export default function Products({ product }) {
    const { query } = useRouter();
    return (
        <Layout><div>
            <h1>Продукт c id {query.id}</h1>
            <div>Имя продукта - {product.name}</div>
        </div></Layout>

    );
}
export async function getServerSideProps({ params }) {
    const response = await fetch(
        `http://localhost:3003/products/${params.id}`
    );
    const product = await response.json();
    return {
        props: { product }, // will be passed to the page component as props
    };
}
