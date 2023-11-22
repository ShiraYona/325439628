import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
////// למורה היקרה תודה רבה על התיחשבות התחלתי את המבחן  שעתיים אחרי הזמן עקב בעיות בריקאט עצמו עברתי 3 מחשבים 
/// מקווה שעשיתי לפי הוראות
//;/שוב תודה רבה
const Calender=()=>{

  const navigate = useNavigate() 

    const [date, setDate] = useState([]);
    const [dateStart, setDateStart] = useState(" ");
    const [dateEnd,setDateEnd] = useState(" ");

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);



    async function fetchData() {
    try {
        const response = await (await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min-on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${dateStart}&end=${dateEnd}`))//בקשה
        const data = await response.json()
        setDate(data)
        console.log("successfully");
        console.log(data);
    }
    catch {
        console.log("it is not succeed");
    }
}

    
    const sendPrachna=(date)=>{
      navigate("/Prshot", {state:date})
    }
    
    useEffect(() => {
   
    }, [])

      const show=()=>{
        fetchData(dateStart,dateEnd)
    }

    // const handleChange = () => {
    //   setChecked1(!checked);
 
//   console.log("checked", checked);
        return (<>
        <h1></h1>
       
   
          <input placeholder="הכנס תאריך התחלה" onChange={(e)=>setDateStart(e.target.value)}/>
          <input placeholder="הכנס תאריך סיום" onChange={e=>setDateEnd(e.target.value)}/>
          <button onClick={show}>הצג</button>
       
          {date && date.map(i=>{
          
           
          return(<> <div key={i.id}></div>
           <button onClick={()=>sendPrachna(i.date)}>פרשת השבוע היא</button>
                   <h1>----------------------------</h1>
                    <div>{i.title}</div>
                    <div>{i.start}</div>
                    <div>{i.allDay}</div>
                    <div>{i.className}</div>
                    <h1>----------------------------</h1>


                   

                    
         </>
          )}



          )}

</>) }
// return (<>
//   {/* ------  1  ----------------------------------------------------------------------- */}
//   <Input placeholder="תאריך התחלה: yy-mm-dd" onBlur={(e) => setdateStart(e.target.value)} ></Input>
//   {/* <Calendar value={date} onBlur={(e) => setdateStart(e.target.value)} ></Calendar> */}
//   {/*ניסוי בלבד!! <DatePicker  onBlur={(e) => setdateEnd(e.target.value)} /> */}

//   <Input placeholder="תאריך סיום: yy-mm-dd" onBlur={(e) => setdateEnd(e.target.value)} ></Input>
//   {/* ------  2  ----------------------------------------------------------------------- */}
//   <button onClick={() => { show() }}>show חייב שיהיה 2 תאריכים תקינים</button>
//   {/* ------  3  ----------------------------------------------------------------------- */}
//   {
//       Date && Date.map(i => {
//           return <>
//               {/* הצגת התאריכים המבוקשים */}
//               <div className={styles.Eee}>
//                   {/* <h1 style={{ color: "green" }}>{i.title}</h1>
//                   <h2>{i.description}</h2>
//                   <h2 style={{ color: "brown" }}>{i.start}</h2> */}
//                   {/* {()=>a(i)} */}

//                   {
//                       checked === true && (<>
//                           <h1 style={{ color: "red" }}>{i.title}</h1>
//                       </>)
//                   }
//               </div>
//           </>
//       })
//   }
//   <div>
//       <label>
//           <input
//               type="checkbox"
//               id="checkbox"
//               checked1={checked1}
//               onChange={handleChange}
//           />
//           הצג פרשת שבוע
//       </label>

//       <label>
//           <input
//               type="checkbox"
//               id="checkbox"
//               checked2={checked2}
//               onChange={handleChange}
//           />
//           הצג הכל
//       </label>
//   </div>

// </>)

export default Calender;

