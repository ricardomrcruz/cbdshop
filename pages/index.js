import getAllProducts from '@/lib/get-all-products'
import getPageData from '@/lib/get-page-data'
import ProductGrid from '@/components/product-grid'
import CarouselComp from '@/components/ui/CarouselComp';

function IndexPage({ products }) {
  return (
    <>
    <CarouselComp />
  <ProductGrid products={products} /> 
  </>)
}


export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })
  const { products } = await getAllProducts({ locale })

  return {
    props: { ...pageData, products }
  }
}


export default IndexPage
