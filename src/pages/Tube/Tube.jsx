import React , { useState } from 'react'
import './Tube.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import '../../Components/Feed/Feed.css';
import '../../Components/Sidebar/Sidebar.css';

const Tube = ({sidebar}) => {

  const [category,setCategory] = useState(0);

  return (
  <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category}/>
    </div>
  </>
  )
}


export default Tube;