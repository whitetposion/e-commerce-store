import { Product } from "@/type"
import Currency from "@/components/ui/currency"

interface InfoProps {
     data: Product
}
const Info : React.FC<InfoProps>= ({
     data
}) => {
     return (
          <div>
               <h1 className="text-3xl font-bold text-gray-900">
                    {data?.name}
               </h1>
               <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl text-gray-900">
                         <Currency value = {data?.price}/>
                    </p>
               </div>
               <hr className="my-4"/>
               <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                         Size:
                         <div>
                              {data?.size?.name}
                         </div>
                    </h3>
               </div>
               <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                         Color:
                         <div 
                              className="h-6 w-6 rounded-full border border-gray-600"
                              style={{backgroundColor: data?.color?.value}}
                         />
                         <div>
                              {data?.color?.name}
                         </div>
                    </h3>
               </div>
               <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                         Size:
                         <div>
                              {data?.size?.name}
                         </div>
                    </h3>
               </div>
          </div>
     )
}

export default Info
