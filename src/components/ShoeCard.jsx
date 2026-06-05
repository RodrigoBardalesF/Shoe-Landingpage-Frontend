
const ShoeCard = ({imgURL, changeBigShoeImg, bigShoeImg}) => {
    
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){ {
            changeBigShoeImg(imgURL.bigShoe)
    }
}

    return (
        <div className = {'border-2 rounded-xl ${bigShoeImg === imgURL ? "border-red-400" : "border-transparent"} cursor-pointer max-sm:flex-1'} 
        onClick={handleClick}
        >
            <div>
                <img
                src={imgURL.thumbnail}
                />
            </div>

        </div>
    )
  }
}

export default ShoeCard