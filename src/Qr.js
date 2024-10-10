import './Qr.css'
import { useState } from 'react'
 

const Qr = () => {
    const [img, setImg] = useState("")
    const [loading,setLoading]=useState(false)
    const [qrdata,setQrdata]=useState("")
    const [qrsize,setQrsize]=useState()

 
  function genqr(){
   setLoading(true)
   try{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
    setImg(url)
   }
   catch(error){
        console.error("enter the errror",error)
   }
   finally{
    setLoading(false)
   }
}
function downqr(){
    fetch(img).then((response) => response.blob())
       .then((blob)=>{
        const link=document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="ezhu.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}
  return (
    <div className='container'>
        <div className="heading">
            <h1>Generate Qr Code</h1>
        </div>
        <div className="images">
             {img && <img src={img} alt='qrcode'/>}
        </div>
        {loading  && <p>  please wait loading.....</p>}
        <div className="boxes">
            <label className='input'>Enter your text:</label>
            <input type='text' placeholder='Enter your text' value={qrdata} onChange={(e)=>setQrdata(e.target.value)
                
            }/>
            <label className='input' >Enter your size:</label>
            <input type='text' placeholder='Enter your size' value={qrsize} onChange={(e)=>setQrsize(e.target.value)}/>
            </div>
            <div className="buttons">
                <button id='gen' disabled={loading} onClick={genqr} >Generate Qr</button>
                <button id='down' onClick={downqr}>Downlaod Qr</button>

            </div>

        
        <p>Created by<a href='kjfdkdf'>Ezhumalai</a></p>
      
    </div>
  )
}

export default Qr
