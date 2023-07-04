import {useState} from "react";

export default function Tab(){
    const [toggle,setToggle] = useState(1);
    
    function handleclick(index){
      setToggle(index);
    }
    
    return(
        <div className="main_container">
            <button 
            onClick={()=>handleclick(1)}
            className = {(toggle===1)? "tab tab_active tab_active1" : "tab"}
            >Tab1</button>

            <button
             onClick={()=>handleclick(2)}
             className = {(toggle===2)? "tab tab_active tab_active2" : "tab"}
            >Tab2</button>

            <button
             onClick={()=>handleclick(3)}
             className = {(toggle===3)? "tab tab_active tab_active3" : "tab"}
            >Tab3</button>
           

            <div 
             className={(toggle===1)? "content content1 display_content" : "content"}
            >
                <p><b> From TAB1 </b>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio vitae animi cum molestias minus distinctio sit temporibus aliquid rem hic placeat harum aliquam sint veritatis dolores iusto blanditiis maiores, praesentium accusantium, totam eius repudiandae? Perspiciatis maxime adipisci nobis consequatur molestiae nesciunt voluptates illo doloremque. Minima ad maxime eos aut dolorem?</p>
            </div>

            <div className={(toggle===2)? "content content2 display_content" : "content"}>
                <p><b> From TAB2 </b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia accusantium expedita ipsum eligendi, praesentium incidunt, sunt adipisci natus accusamus perferendis magni maiores! Quibusdam delectus ullam rerum non excepturi placeat!</p>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bahni</td>
                            <td>123456</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={(toggle===3)? "content content3 display_content" : "content"}>
                <p><b> From TAB3 </b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam?</p>
            </div>
        </div>
    )
}