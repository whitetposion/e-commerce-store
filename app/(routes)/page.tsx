import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;
const HomePage = async () =>{
     const products =await getProducts({isFeatured: true})
     const billboard = await getBillboard("819e8244-e5dc-4938-9382-82bdc80ca4ab")
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