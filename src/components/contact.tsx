import Image from "next/image"
import Link from "next/link"


export default function Contact(){
    return(
        <div>
            <h1 className="h-11">Contact Us</h1>

            <form className="id">
               <fieldset>

                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Name" required/>
               

                    <label htmlFor="phone"></label>
                    <input type="number" id="phone" name="phone" placeholder="Phone Number*" required/>

                    
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="E-mail*" required/>

                    
                    <label htmlFor="interested"></label>
                    <input type="interested" id="interested" name="interested" placeholder="Interested In" required/>
                    
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
               </fieldset>
         <Link href={'/confirm'}><button formAction={"/confirm"} className="button2">Send  Email &#8594;</button></Link> 
            </form>

            <Image src="/images/image 12.png" alt="pics" width={600} height={340} className="f9"/>
        </div>

        
    )
}