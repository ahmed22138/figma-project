
import Image from "next/image"

export default function Contacts(){
    return(
        <div>
    
            <a>
            <h1 className="iot">Contact</h1>
            <p className="yve">information</p>

            <h1 className="za">Company Name
             <br/> <br/><br/><br/>
                512.333.2222 </h1>
            <p className="za-2">1234 Sample Street Austin Texas 76401
                <br/><br/><br/><br/><br/>
                Sampleemail@gmail.com
            </p>

             <button className="bti-9">CONTACT US</button>

            </a>

            <Image  src='/images/image 14.png' alt="pics" width={791} height={506} className="teen1"/>


          
            <div className="div1-10">
              <Image src="/images/Group 11 1.png" alt="logo" width={150} height={10} className="unto"/>
                <footer className="f190">
         <h1 className="font-bold">Information</h1><br/>
        
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

        <div className="gts-111">
          <h1 className="font-bold m-2">Contacts</h1>
          <br/>
          
          <a href="#"><img src="/images/Vector.png" alt="icon"  className="fo"/>1234 Sample Street, Austin TX 76401</a><br/>
          <br/>

          <a href="#"><img src="/images/Group.png" alt="icon"  className="fe"/>512.333.2222</a><br/>
          <br/>
          <a href="#"><img src="/images/Vector 1.png" alt="icon"  className="fr"/>sampleemail@gmail.com</a><br/>

        </div>

        <div className="social-media-12">

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

            
         
        </div>
        
    )
}