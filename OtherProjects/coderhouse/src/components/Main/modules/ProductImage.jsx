//props for img in root

import Image from 'mui-image';
import {Link} from '@mui/material';
import {Grid} from '@mui/material';

function ProductImage({objectList,category}){
  return (
    objectList.map((item)=>(
      <Grid container display='flex' direction='column' key={item.id}>
        <Link href={`${category}/${item.id}`}>
          <Image
            src={item.src}
            height="350px"
            width="100%"
            fit="cover"
            duration={1500}
            easing="cubic-bezier(0.7, 0, 0.6, 1)"
            showLoading={ true }
            errorIcon={ true }
            shift={null}
            distance="100px"
            shiftDuration={600}
            bgColor="inherit"
          />
        </Link>
      </Grid>
      ))
  )
}

export default ProductImage;