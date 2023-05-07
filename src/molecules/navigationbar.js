import './navigationbar.css'
import Button from '../atoms/button'

export default function Navigationbar(){
    const logoLink='https://mir-s3-cdn-cf.behance.net/projects/404/8e6692141570489.Y3JvcCw4OTksNzAzLDYyLDUz.png'
    return(
        <>
        <div className='nav'>
          
                <img src={logoLink}/>
                <Button btnStyle='navBtn' name="Sign Up"/>
             
             
        </div>
        </>
    )
}