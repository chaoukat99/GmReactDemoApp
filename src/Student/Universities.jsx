import React, { useState } from 'react'
import StudentMenu from './StudentMenu'
import axios from 'axios';
function Universities() {

    const [pays,setPays]=useState("");
    const [dis,setDis]=useState("none");

    const [universities,setUniversities]=useState([]);
  
    function FetchApi(country){
         

        // fetch(`http://universities.hipolabs.com/search?country=${country}`)
        // .then(res=>res.json())
        // .then(data=>{
        //   setUniversities(data) // modifier
        //   console.log(data);
        // })
    

        // Using Axios 

        axios.get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(res=>setUniversities(res.data));

    }


  return (
      <>

      <StudentMenu/>
      <div>
        <label htmlFor="" className='label-control'>Cherchez Par Pays</label>
        <select name="" id="" className='form-control'  onChange={(ev)=>setPays(ev.target.value)}  >
              <option value="">Selectionner un pays</option>
              <option value="morocco">Morocco</option>
              <option value="algeria">Algerie</option>
              <option value="tunisia">tunisie</option>

        </select>
        <button className='btn btn-primary'
        
        onClick={()=>{
            FetchApi(pays);
        }}
        >Search Universities</button>
      </div>



          <div className='d-flex justify-content-center gap-3 flex-wrap' style={{display:dis}}>
            

            {universities.length>0?universities.map((el,i)=>{
              return (
                <div key={i} className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{el.name}</h5>
   
    <p className="card-text">
      Université : {el.name}  | Country : {el.country} 
    </p>
    <a href={el.web_pages[0]} className="btn btn-primary" target='_blank'>Visit University </a>
  </div>
</div>
              )
            }):<div className='alert alert-danger'>No universities Exist</div>}

          </div>
    </>
  )
}

export default Universities