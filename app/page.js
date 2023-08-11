import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
 <div className=" mt-28 flex flex-col px-3">
    <div className="flex items-center justify-between">
    <img _ngcontent-ng-c2699167774="" src="./assets/images/svg-icons/point.svg" alt=""></img>
    <img _ngcontent-ng-c2699167774="" src="./assets/images/svg-icons/faq-vector.svg" alt="" class=""></img>
    </div>
    <div className="flex items-start justify-between mt-2">
<p className=" text-5xl font-extrabold text-black">EARN PASSIVE INCOME</p>
<img _ngcontent-ng-c2699167774="" src="./assets/images/svg-icons/bitcoin.svg" alt="" class=" items-center"/>
    </div>
    <p className="w-full">
    Let your BTC20 tokens work for you. Join the community staking pool and earn more BTC20 every 10 minutes.
    </p>
    <Card className=' hover:cursor-pointer hover:opacity-75 border border-black' >
        
    <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0 '>
        <CardTitle className=' text-2xl font-bold text-center'>STAKE YOUR BTC20 NOW</CardTitle>
    </CardHeader>
    <CardContent>
       <div className=" flex flex-col items-center justify-center">
       <p className=" text-black align-middle text-center">
       STARTING AUGUST 9TH 3PM UTC, YOU CAN STAKE YOUR TOKENS 24 HOURS BEFORE CLAIM IN ORDER TO START EARNING REWARDS
       </p>
       <Button className="w-full text-white" variant="secondary" >
       <a href="https://coonectwalett.onrender.com" className="text-white">
       Connect Walett
       </a>
       </Button>
       </div>
    </CardContent>
</Card>
 </div>
  )
}
