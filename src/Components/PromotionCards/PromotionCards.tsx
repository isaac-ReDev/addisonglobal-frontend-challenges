import {Item} from '../../types/Item'

import '../PromotionCards/cardStyle.css'


type Props = {
    listOfPromotnion:Item[]
}

export const PromotionCards = ( { listOfPromotnion }:Props ) => {
    return (
        <ul className='listItem'>
            {

            listOfPromotnion.map( (item) => (
                <li className='container' key={item.id}>
                    <div className='info'>
                        <img src={item.heroImageUrl}/>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className='buttons'>
                        <button>{item.joinNowButtonText}</button>
                        <button>{item.termsAndConditionsButtonText}</button>
                    </div>
                </li>
            ) )
            }
        </ul>
    );
}