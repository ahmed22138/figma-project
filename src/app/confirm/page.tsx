import Image from "next/image"





export default function Confirm(){
    return(
        <div className="iti-1">
            <div className="jj-11">
                <Image src={'/images/success.png'} alt="pics" width={142} height={142} />
                <div className="rrs-11">

                    <h1 className="f90">Succeess </h1>
                    <br/>
                    <p className="p2p-1"> Thanks you for send the Email</p>
                    <br/>
                    <button className="bbn-76">Completed</button>

                </div>
            </div>

        </div>
    )
}