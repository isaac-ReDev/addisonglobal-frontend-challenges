import {Item} from '../../types/Item'

import '../PromotionCards/cardStyle.css'


type Props = {
    listOfPromotnion:Item[]
}

export const PromotionCards = ( { listOfPromotnion }:Props ) => {
    const lis = listOfPromotnion.sort( (a,b) => {
        return a.sequence - b.sequence;
    } );
    
    return (
        <ul className='listItem'>
            {

            lis.map( (item) => (
                <li className='container' key={item.id}>
                    <div className='info'>
                        <img src={item.heroImageUrl}/>
                        <p>{item.name}</p>
                        <p>{item.sequence}</p>
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