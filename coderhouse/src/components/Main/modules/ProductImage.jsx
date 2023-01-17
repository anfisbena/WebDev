import Image from 'mui-image';



function ProductImage({src}){
  return (
    <Image
          src={src}
          height="50%"
          width="50%"
          fit="contain"
          duration={1500}
          easing="cubic-bezier(0.7, 0, 0.6, 1)"
          showLoading={ true }
          errorIcon={ true }
          shift="null"
          distance="100px"
          shiftDuration={600}
          bgColor="inherit"
          />
  )
}

export default ProductImage;