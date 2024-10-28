
import Link from "next/link";
import Image from "next/image";

export default function Header (){
    return(
       <div>
<header className="text-grey-600 body-font">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0"/>
    <Image src="/images/Group11.png" alt="logo" width={100} height={50} className="images"/>

    <nav className="navBar">
        <Link href={'http://localhost:3000/'}  className="mains">MAIN</Link>
        <Link href={'/Gallery'} className="gallery">GALLERY</Link>
        <Link href={'/Projects'} className="project">PROJECTS</Link>
        <Link href={'/Certification'} className="cer">CERTIFICATION</Link>
        <Link href={'/Contacts'} className="con">CONTACTS</Link>
    </nav>
</div>
</header>
       
       </div>
    )
}