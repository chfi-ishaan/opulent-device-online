
import Link from 'next/link'

export default function Page(){
 const articles=[...Array(50)].map((_,i)=>({id:i+1,title:`Elite Tech Review #${i+1}`}))
 return(
  <div className='container'>
    <div className='hero'>
      <h1>Opulent Devices</h1>
      <p>Luxury Tech Reviews & Analysis</p>
    </div>
    <h2>Featured Tech</h2>
    <div className='slider'>
      <div className='slide'>Flagship Phone</div>
      <div className='slide'>Luxury Watch</div>
      <div className='slide'>Premium Laptop</div>
    </div>
    <h2>Articles</h2>
    <ul>{articles.map(a=>(<li key={a.id}><Link href={`/${a.id}`}>{a.title}</Link></li>))}</ul>
  </div>
 )
}
