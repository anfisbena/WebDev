import { Link } from '@mui/material';
import Image from 'mui-image';



function ProductImage({src}){
  return (
    <Link href='./Pages/ProductTemplate.jsx'>
      <Image
            src={src}
            height="350px"
            width="100%"
            fit="cover"
            duration={1500}
            easing="cubic-bezier(0.7, 0, 0.6, 1)"
            showLoading={ true }
            errorIcon={ true }
            shift="null"
            distance="100px"
            shiftDuration={600}
            bgColor="inherit"
            />
    </Link>
  )
}

export default ProductImage;