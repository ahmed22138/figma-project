import Image from "next/image"


export default function Hero(){
    return(           
  <div>
  
        <section className="relative">
       < Image priority quality={100} className="pointer-events-none select-none" src="/images/hello1.png" alt='hero'  width={800} height={500} style={{ objectFit: 'cover', objectPosition: '75%'}}/>
        </section>
        <h1 className="h1">PROJECT</h1>
         <p className="p1">LOREM </p>
          <div className="di2">
       <button><Image src="/images/Frame 9.png" alt="arrow" width={55} height={50}/></button>
            </div>
             <a className="a1">
          <button><Image src="/images/Group 10.png" alt="farrow" width={55} height={50}/></button>
            </a>
        
 </div>
       
    )
}