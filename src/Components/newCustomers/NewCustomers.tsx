import {Item} from '../../types/Item'


type Props = {
    propsListOfNewCustomers:Item[]
}

export const NewCustomers = ( { propsListOfNewCustomers }:Props ) => {
    return (
        <ul>
            {

                propsListOfNewCustomers.map( (item) => (
                    <li className='container' key={item.id}>
                        <img  src={item.heroImageUrl}/>
                        <p>{item.name}</p> | <span>{JSON.stringify(item.onlyNewCustomers)}</span>
                        <button>{item.joinNowButtonText}</button>
                        <button>{item.termsAndConditionsButtonText}</button>
                    </li>
            ) )
            }
        </ul>
    );
}