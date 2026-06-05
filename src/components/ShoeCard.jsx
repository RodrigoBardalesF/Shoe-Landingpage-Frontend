
const ShoeCard = ({imgURL, changeBigShoeImg, bigShoeImg}) => {
    
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){ 
            changeBigShoeImg(imgURL.bigShoe)
    }
}

    return (
        <div 
          className = {`border-2 rounded-2xl ${bigShoeImg === imgURL.bigShoe ? "border-red-400" : "border-transparent"} cursor-pointer max-sm:flex-1`} 
        onClick={handleClick}
        >
            <div className="flex justify-center items-center rounded-xl bg-center bg-cover sm:h-40 max-sm:my-4">
                <img
                src={imgURL.thumbnail}
                alt="shoe collection"
                width={127}
                height={103}
                className="rounded-2xl object-contain"
                />
            </div>
        </div>
    )
  }


export default ShoeCard