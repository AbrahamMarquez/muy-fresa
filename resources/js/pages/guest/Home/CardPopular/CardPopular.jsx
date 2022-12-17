//style
import './CardPopular.scss'

//assets
import heartWhite from '../../../../img/icons/heartWhite.svg'
import heartTransparent from '../../../../img/icons/heartTransparent.svg'

export default function ({
    img,
    boxSize,
    cuantity,
    price,
    selected,
    id,
    items,
    setItems
}) {

    const handlePopular = () => {
        const idxSelect = items.findIndex(element => element.id == id)


        let newItems = [...items]
        if(newItems[idxSelect].selected){
            newItems[idxSelect].selected = false
        }else{
            newItems[idxSelect].selected = true
        }

        setItems(newItems)
    }

    return (
        <div className="cardPopular">
            <div className='img' style={{background: `url(${img})`}}></div>
            <div className='data'>
                <p className='box'>{boxSize}</p>
                <hr />
                <p className='cuantity'>{cuantity}</p>
                <div className='priceContainer'>
                    <p className='price'>{price}</p>
                    {selected ?
                        <button className='heartWhite' onClick={handlePopular}>
                            <img src={heartWhite} />
                        </button>
                        :
                        <button className='heartTransparent' onClick={handlePopular}>
                            <img src={heartTransparent} />
                        </button>
                    }
                </div>
            </div>

        </div>
    )
}