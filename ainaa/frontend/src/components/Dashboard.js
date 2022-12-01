import React from 'react'
import Sidebar from './Sidebar'
import { useState,useEffect } from "react";
import axios from "axios";

import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart; 

export default function Dashboard() {
  const [totalgoals,settotalgoals]=useState([]);
  const [completedgoals,setcompletedgoals]=useState([]);
  const userId=localStorage.getItem('loggeduser');
 
  useEffect(()=>{
    try{
      axios.get('/api/usertask/'+userId)
      .then((response)=>{
        console.log(response);
        settotalgoals(response.data); 

      });
    }catch(error){
      console.log(error);
    }
    try{
      axios.get('/api/completedtask/'+userId)
      .then((response)=>{
        console.log(response);
        setcompletedgoals(response.data);

      });
    }catch(error){
      console.log(error);
    }
    

  
  },[]);
 
  
  


  



  return (
    <div>
      <div className='container mt-4'>
      <div className='row'>
      <aside className='col-md-3'>
                <Sidebar/>
            </aside>
        <section className='col-md-9'>
        
        
        <div>
			    <CanvasJSChart options = {{
            animationEnabled: true,
            title: {
              text: "Your completion"
            }, 
            subtitles: [{
              text: (((completedgoals.length/totalgoals.length)*100)<50?'Focus on your tasks!'
              :((completedgoals.length/totalgoals.length)*100)>=50&&((completedgoals.length/totalgoals.length)*100)<75?'Keep going!'
              :((completedgoals.length/totalgoals.length)*100)>=75&&((completedgoals.length/totalgoals.length)*100)<100?'You are doing great!'
              :((completedgoals.length/totalgoals.length)*100)==100?'Great! All completed.'
              :'Completion'),
              verticalAlign: "center",
              fontSize: 16,
              dockInsidePlotArea: true
            }],
            data: [{
              type: "doughnut",
              showInLegend: true,
              indexLabel: "{name}: {y}",
              yValueFormatString: "#,###'%'",
              dataPoints: [
                { name: "Completed goals", y:(completedgoals.length/totalgoals.length)*100},
                { name: "Incomplete goals", y: 100-(completedgoals.length/totalgoals.length)*100 },
              
              ]
            }]
          }}
                /* onRef={ref => this.chart = ref} */
			/>
        </div>

        </section>
      </div>
    </div>
    </div>
    
  )
}
