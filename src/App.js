import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [sights, setSights] = useState(data);
  const [showText, setShowText] = useState(false);
  const removieSights = (id) => {
    let newSights = sights.filter(sight => sight.id !== id);
    setSights(newSights);
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText)
  }
  return (
    <div>
     <div className="container">
       <h1>{sights.length} достопримечательностей Санкт-Петербурга</h1>
       </div>
       <div className='container'>
         {sights.map((element =>{
           const {id, sight, image, description, source, showMore} = element;
           return (
             <div key={id}>
               <div className='container'>
                 <h2>{id} - {sight}</h2>
               </div>
               <div className='container'>
                <img src={image} width="600px" alt="sight"/>
               </div>
               <div className='container'>
                 <p className='source'>{source}</p>
               </div>
               <div className='container'>
                 <p>{showMore ? description : description.substring(0,300) + "..."} <button className='btnShowText' onClick={()=>showTextClick(element)}>{showMore ? "скрыть" : "раскрыть"}</button></p>
               </div>
               <div className='container'>
               <button className='btnRemovie' onClick={()=> removieSights(id)}>Убрать из списка</button>
               </div>
               
              
             </div>
           )
         }))}
         <div className='container'>
                <button className="btnDelete" onClick={()=>setSights([])}>Удалить все</button>
               </div>
       </div>
     
    </div>
  );
}

export default App;
