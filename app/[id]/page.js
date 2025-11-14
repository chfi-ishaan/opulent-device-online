
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export async function generateStaticParams(){
 return [...Array(50)].map((_,i)=>({id:(i+1).toString()}))
}

export default function Page({params}){
 const {id}=params
 return(
  <div className='container'>
    <h2>Elite Tech Review #{id}</h2>
    <p>Premium analysis for luxury device {id}.</p>
    <AdUnit/>
    <div className='slide' style={{padding:'20px'}}>
      <h3>Buy Now</h3>
      <a href='#' style={{color:'#f0c060'}}>Amazon Link</a>
    </div>
    <p><Link href='/'>← Back</Link></p>
  </div>
 )
}
