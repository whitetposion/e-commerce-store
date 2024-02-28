import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;
const HomePage = async () =>{
     const products =await getProducts({isFeatured: true})
     const billboard = await getBillboard("9782fe9a-79c0-4567-b2e5-719bf3a39b4f")
     return (
          <Container>
               <div className="space-y-10 pd-10">
                    <Billboard data = {billboard}/>
                    <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title = "Featured Prodoucts" items ={products}/>
                    </div>
               </div>
          </Container>
     )
}
export default HomePage