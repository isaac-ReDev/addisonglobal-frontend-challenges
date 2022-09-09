import { useEffect, useState } from 'react'
import {Item} from './types/Item'
import {PromotionCards} from './Components/PromotionCards/PromotionCards'
import {NewCustomers} from './Components/newCustomers/NewCustomers'
import './App.css'

function App() {
  const [allPromotion  , setAllPromotions] = useState(true);
  const [newCustomers , setNewCustomers] = useState(false);
  const [listOfPromotions , setListOfPromotions] = useState<Item[]>([]);
  const [listOfNewCustomers , setListOfNewCustomers] = useState<Item[]>([]);


  useEffect( () => {
    async function getPromotions (){
      const getPromotion = await fetch("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
      .then(response => response.json())
      .then(data => setListOfPromotions(data))
      getPromotion
    }

    async function getNewCustomers (){
      const getnewCustomers = await fetch("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
      .then(response => response.json())
      .then(data => {
          setListOfNewCustomers(filterByNewCustomers(data)  );
      })
      getnewCustomers
    }

    if(allPromotion && newCustomers === false){
      getPromotions()
      console.log(listOfPromotions) 
    }else if (allPromotion === false && newCustomers){
      getNewCustomers()
      console.log(listOfNewCustomers)
    }
    
  },[allPromotion, newCustomers])

  //* filter boy new customers
  const filterByNewCustomers = (list:Item[]) =>{
    const filteredList = list.filter( item => item.onlyNewCustomers )
    return filteredList;
  }

  const ShowAllPromotions =()=>{
      setAllPromotions(true);
      setNewCustomers(false);
      
  }

  const ShowNewCustomers =()=>{
    setAllPromotions(false);
    setNewCustomers(true);
    
}
  

  return (
    <div className="App">
        <div className='btns'>
          <button onClick={() => ShowAllPromotions()}>All Promotions</button>
          <button onClick={() => ShowNewCustomers()}>new Customers</button> 
        </div>
        { allPromotion === true && newCustomers === false ? (
          <div className='containerList'>
            {
              <PromotionCards listOfPromotnion={listOfPromotions}/>
              
            }
          </div>) : (
            <div className='containerList'>
             {
              <PromotionCards listOfPromotnion={listOfNewCustomers}/>               
             }
           </div>)
    
        }
        
        
    </div>
  )
}

export default App
