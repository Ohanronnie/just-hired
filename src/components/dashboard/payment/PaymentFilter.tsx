import RangePicker from "@/components/global/RangePicker"

export default function PaymentFilter() {
  return (
    <div className='pt-3 space-y-2 max-w-screen flex-center flex-wrap justify-between'>
         <RangePicker
        onSelect={({startDate,endDate})=>{
             console.log(startDate,endDate)
         }}
      />
      <span className='text-lg text-main font-medium'>OverAll</span>
    </div>
  )
}
