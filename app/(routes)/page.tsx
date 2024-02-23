import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;
const HomePage = async () =>{
     const billboard = await getBillboard("86aa31ba-5c6b-4022-8278-b8d2cede5258")
     return (
          <Container>
               <div className="space-y-10 pd-10">
                    <Billboard data = {billboard}/>
               </div>
          </Container>
     )
}
export default HomePage