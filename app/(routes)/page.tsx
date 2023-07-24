import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboard("6a1e1717-2036-4c80-9d74-3e3581647fcd");

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="w-full space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage