
import Image from "next/image"

export default function Gallery(){
    return(
        <div>
            <h1 className="gtr">Photo</h1>
            <p className="p22"> Gallery</p>

            <section>
                <Image src="/images/Rectangle 22.png" alt="pic" width={210} height={280} className="uit"/>

                <Image src="/images/Rectangle 23.png" alt="pic" width={210} height={280 } className="tif"/>

                <Image src="/images/Rectangle 24.png" alt="pic" width={210} height={280} className="mex"/>

                <Image src="/images/Rectangle 25.png" alt="pic" width={210} height={280} className="mtx"/>

                <Image src="/images/Rectangle 26.png" alt="pic" width={210} height={280} className="mfx"/>

                <Image src="/images/Rectangle 27.png" alt="pic" width={210} height={280} className="tiles"/>

                <Image src="/images/Rectangle 28.png" alt="pic" width={210} height={280} className="ops"/>

                <Image src="/images/Rectangle 29.png" alt="pic" width={210} height={280} className="vop"/>

                <Image src="/images/Rectangle 30.png" alt="pic" width={210} height={280} className="fin"/>

                <Image src="/images/Rectangle 31.png" alt="pic" width={210} height={280} className="vip"/>

                <Image src="/images/slide-numbers.png" alt="pic" width={140} height={52} className="ypi"/>

              <Image src="/images/Frame 9.png" alt="pic" width={55} height={50} className="quite"/>
                        
              <Image src="/images/Group 10.png" alt="pic" width={55} height={50} className="xmb"/>

            </section>
                
              <div className="div1-2">
              <Image src="/images/Group 11 1.png" alt="logo" width={150} height={10} className="utx"/>
                <footer className="f100">
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

        <div className="gtf">
          <h1 className="font-bold m-2">Contacts</h1>
          <br/>
          
          <a href="#"><img src="/images/Vector.png" alt="icon"  className="fo"/>1234 Sample Street, Austin TX 76401</a><br/>
          <br/>

          <a href="#"><img src="/images/Group.png" alt="icon"  className="fe"/>512.333.2222</a><br/>
          <br/>
          <a href="#"><img src="/images/Vector 1.png" alt="icon"  className="fr"/>sampleemail@gmail.com</a><br/>

        </div>

        <div className="social-media-1">

        <h1 className="font-bold">Social Media</h1>
            <br/>
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