import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import SectionTitle from './components/SectionTitle/SectionTitle'
import Posts from './components/Posts/Posts'
import CurrentlyCooking from "./components/Sidebar/CurrentlyCooking";
import WantToCook from "./components/Sidebar/WantToCook";
import toast, { Toaster } from 'react-hot-toast';
import './components/Sidebar/Table.css'
import { PiWarningFill } from "react-icons/pi";

function App() {

  const [cooks, setCooks] = useState([])
  const [wishcooks, setWishCooks] = useState([])
  const [cooking, setCooking] = useState([])
  const [time, setTime] = useState(0);
  const [calorie, setCalorie] = useState(0)

  
  useEffect(() => {
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>{
      setCooks(data)
    })
  }, [])

  

  const handleCook = (cook) => {
    const isExist = wishcooks.find(wishcook=> wishcook.recipe_id == cook.recipe_id)
    if(!isExist) {
      setWishCooks([...wishcooks, cook])
    } else {
      toast(()=> (<div className='text-white'>{cook.recipe_name} is already been added!</div>), {icon: <span className='text-3xl text-orange-500'><PiWarningFill /></span>, style: {backgroundColor: "black"}})
    }
    
  }

  const handleCooking = (cook) => {
    setCooking([...cooking, cook])
    setTime(time+cook.preparing_time)
    setCalorie(calorie+cook.calories)
    const updateCook = wishcooks.filter(wishcook=> wishcook.recipe_id != cook.recipe_id)
    setWishCooks(updateCook)
  }

  return (
    <>
     <Toaster/>
      <Header/>
      <Banner/>
      <SectionTitle title='Our Recipes' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere pretium metus at feugiat. Fusce at luctus purus. Nunc pharetra gravida ex a scelerisque. Aliquam pharetra condimentum euismod. Duis scelerisque turpis in erat molestie, a viverra urna sollicitudin. Proin eget elementum elit, id euismod ex. Nulla dictum finibus elit dictum sollicitudin. Etiam velit erat, blandit vitae sagittis a, tempor eget quam. Integer mauris augue, dictum tincidunt lectus eu, commodo molestie mi. Integer tincidunt risus nibh, id egestas erat suscipit et. Vestibulum ut arcu placerat, congue dui sit amet, condimentum purus. Ut eget vulputate nisi, quis posuere enim. Donec eleifend massa ut erat malesuada posuere. Mauris ipsum erat, tempor eu auctor eu, convallis quis felis.'/>
      <div className='flex lg:flex-row flex-col gap-5'>
        <div className='flex-1'><Posts handleCook={handleCook} cooks={cooks}/></div>
        <div className='lg:w-[40%]' ><div className="border-[1px] rounded-xl py-5">
            <WantToCook handleCooking={handleCooking} wishcooks={wishcooks}/>
            <CurrentlyCooking cooking={cooking} time={time} calorie={calorie}/>
        </div></div>
      </div>
    </>
  )
}

export default App
