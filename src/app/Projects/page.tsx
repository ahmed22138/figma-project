
import Image from "next/image"
import Link from "next/link"


export default function Projects(){
    return(
        <>
        <div>
            <p className="hits">Our </p>
            <h1 className="birds">Projects</h1>
            
        <div className="card-container">
            <div className="image-container">
                <Image src="/images/image 30.png" alt="pics" width={750} height={600} />
                <div className="content-container">
                    <h1 className="htc">Sample  Project</h1>
                   <p className="par-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                     Molestiae quaerat optio voluptatibus dicta rerum odit 
                    <br/>
                     numquam assumenda cupiditate ab nostrum obcaecati
                    <br/>
                     Lorem ipsum, dolor sit amet consectetur adiposis
                     <br/>
                      elit. Illo doloribus architecto ducimus nisi,
                   </p>
                <Link href ={"/ourProject"}> <button className="btn-45">View More &#8594;</button> </Link>
                </div>
                 
            </div>

        </div>


        <div className="cards-container">
            <div className="images-container">
                <Image src="/images/image 33.png" alt="pics" width={750} height={600} />
                <div className="contents-container">
                    <h1 className="htc-1">Sample  Project 2</h1>
                   <p className="par-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                     Molestiae quaerat optio voluptatibus dicta rerum odit 
                    <br/>
                     numquam assumenda cupiditate ab nostrum obcaecati
                    <br/>
                     Lorem ipsum, dolor sit amet consectetur adiposis
                     <br/>
                      elit. Illo doloribus architecto ducimus nisi,
                   </p>
                    <button className="btn-48">View More &#8594;</button>
                </div>
                 
            </div>

        </div>


        <div className="cards1-container">
            <div className="images1-container">
                <Image src="/images/image 32.png" alt="pics" width={750} height={600} />
                <div className="contents1-container">
                    <h1 className="htc-2">Sample  Project 3</h1>
                   <p className="par-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                     Molestiae quaerat optio voluptatibus dicta rerum odit 
                    <br/>
                     numquam assumenda cupiditate ab nostrum obcaecati
                    <br/>
                     Lorem ipsum, dolor sit amet consectetur adiposis
                     <br/>
                      elit. Illo doloribus architecto ducimus nisi,
                   </p>
                    <button className="btn-50">View More &#8594;</button>
                </div>
                 
            </div>

        </div>
      
        <Image src="/images/Group 10.png" alt="pics" width={55} height={50} className="you"/>
        <Image src="/images/Frame 9.png" alt="pics" width={55} height={50} className="for"/>
        <Image src="/images/slide-numbers.png" alt="" width={60} height={55} className="that"/>



        <div className="div1-85">
        <Image src="/images/Group 11 1.png" alt="logo" width={150} height={10} className="ui-2"/>
        <footer className="ft1-1">
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

          <div className="gi-42">
            <h1 className="font-bold m-2">Contacts</h1>
            <br/>
            
            <a href="#"><img src="/images/Vector.png" alt="icon"  className="fo"/>1234 Sample Street, Austin TX 76401</a><br/>
            <br/>

            <a href="#"><img src="/images/Group.png" alt="icon"  className="fe"/>512.333.2222</a><br/>
            <br/>
            <a href="#"><img src="/images/Vector 1.png" alt="icon"  className="fr"/>sampleemail@gmail.com</a><br/>

          </div>

          <div className="social-media-99">

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
        </>
    )
}