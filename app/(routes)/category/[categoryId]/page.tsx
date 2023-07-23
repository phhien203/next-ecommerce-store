import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'
import Filter from './components/filter'
import MobileFilter from './components/mobile-filter'

export const revalidate = 0

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: {
    categoryId: string
  }
  searchParams: { colorId: string; sizeId: string }
}) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter colors={colors} sizes={sizes} />

            <div className="hidden lg:block ">
              <Filter name="Sizes" data={sizes} valueKey="sizeId" />
              <Filter name="Colors" data={colors} valueKey="colorId" />M
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
