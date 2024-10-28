import Image from "next/image"


export default function ourProject(){
    return (

        <>
       <h1 className="hhr">Sample</h1>
       <p className="tttt1">Project 1</p>
       
       <div >
       <Image src="/images/ahmi.png" alt="pics" width={1200} height={435} className="txs"/>
      <Image src="/images/image 34.png" alt="" width={419} height={428} className="class"/>
      <Image src="/images/kits.png" alt="pics" width={419} height={428} className="class-22"/>
      <Image src="/images/image 35.png" alt="pics" width={1200} height={435} className="class-33"/>
        </div>

        <div className="div1-87">
        <Image src="/images/Group 11 1.png" alt="logo" width={150} height={10} className="mx"/>
        <footer className="ft1-13">
       <h1 className="font-bold m-2">Information</h1><br/>
        
          <p>Main</p>
          <br/>
          <p>Gallery</p>
          <br/>
          <p>Project</p>
          <br/>
          <p>Certification</p>
          <br/>
          <p>Contacts</p>
          <br/>

          <div className="gi-41">
            <h1 className="font-bold m-2">Contacts</h1>
            <br/>
            
            <a href="#"><img src="/images/Vector.png" alt="icon"  className="fo"/>1234 Sample Street, Austin TX 76401</a><br/>
            <br/>

            <a href="#"><img src="/images/Group.png" alt="icon"  className="fe"/>512.333.2222</a><br/>
            <br/>
            <a href="#"><img src="/images/Vector 1.png" alt="icon"  className="fr"/>sampleemail@gmail.com</a><br/>

          </div>

          <div className="social-media-91">

          <h1 className="font-semibold m-2">Social Media</h1>
              <br/>
            <a href="#"><img src="/images/Shape.png" alt="Facebook" className="tt" /></a>
             <br/>
            <a href="#"><img src="/images/twitter.png" alt="Twitter" className="aa" /></a>
            <br/>
            <a href="#"><img src="/images/Linked In.png" alt="LinkedIn" className="qq"/></a>
          </div>

        </footer>
        
        

       </div>
        </>

     

      
    )
}