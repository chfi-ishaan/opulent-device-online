import Link from 'next/link'
export default function Header(){
return(<header><img src='/logo.png' style={{height:'70px'}}/><h1>Opulent Devices</h1><nav><Link href='/'>Home</Link> | <Link href='/about'>About</Link> | <Link href='/contact'>Contact</Link></nav></header>)
}