import Image from "next/image"


export default function About(){
    return(
        <div>
            <section className="slider">
                <Image src='/images/Rectangle 8.png' alt='photo' width={200} height={200}/>
            </section>

            <a className="place">
                    <Image src="/images/Rectangle 9.png" alt="photo" width={200} height={200} />
                </a>

                <a className="first">
                    <Image src="/images/Rectangle 10.png" alt="photo" width={200} height={200}/>
                </a>

                <h1 className="head">
                    About
                </h1>

                <p className="p2"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                      Accusamus perferendis facilis praesentium unde illo,<br/>
                      voluptates odit a adipisci excepturi,sed animi dolorum vitae!<br/>
                     Pariatur maiores sint ipsam ducimus perspiciatis minus.Lorem,<br/>
                     ipsum dolor sit amet consectetur adipisicing elit.<br/>
                     Quaerat enim laboriosam fugit eos aliquam, porro ad dolorem,<br/>
                      suscipit facere veritatis repudiandae optio eveniet odit,<br/>
                       </p>

                    <div className="li">
                <button><Image src='/images/Frame 11.png' alt="" width={200 } height={71}/></button>
                    </div>

                <h1 className="style">Main Focus/Mission Statement</h1>
               <a className="heading">
                <h1>1</h1>
               </a>
              <p className="pairs">Lorem ipsum dolor sit abet, <br/>
                   consectetur adipisicing edit.<br/>
                 Sift, et quae a molestias in nam nobis nihil,<br/>
                  id commodi aspernatur possimus. Neque soluta<br/>
                   eius odit explicabo sed,<br/>
                    </p>

                    <a className="new">
                        <h1>2</h1>
                    </a>
                    <p className="pair">Lorem ipsum dolor sit abet, <br/>
                   consectetur adipisicing edit.<br/>
                 Sift, et quae a molestias in nam nobis nihil,<br/>
                  id commodi aspernatur possimus. Neque soluta<br/>
                   eius odit explicabo sed,<br/>
                    </p>

                   
                  <section>
                  <h1 className="f1">Our Projects</h1>
                     
                     <Image src="/images/Rectangle 12.png" alt="fic" width={600} height={200} className="pic"/>

                     <Image src="/images/Rectangle 17.png" alt="fic" width={600} height={200} className="pic"/>

                  <h1 className="h2">Simple<br/>
                     Project</h1> 
                     <button className="hi">read more &#8594;</button>

                     <Image src='/images/image 16.png' alt="pic" width={210} height={150} className="fix"/>

                     <Image src="/images/image 17.png" alt="pic" width={679} height={150} className="t1"/>

                     <Image src='/images/image 18.png' alt="pic" width={300}  height={150} className="j1"/>

                     <Image src='/images/image 15.png' alt="pic" width={600} height={200} className="k1"/> 
                     <button className="button1">All Projects &#8594;</button>               
                  </section>
                  
        </div>
    )
}