import {useState, useMemo} from 'react';

const calculateMultipliedCount1 = (value) =>{
  console.log("Calculating multipliedCount1");
  return value * 2;
}

const calculateMultipliedCount2 = (value) =>{
  console.log("Calculating multipliedCount2");
  return value * 3;
}

const ShowMultipliedCount = ( {count1, count2} ) =>{
  console.log("rendered showMultipliedCount"); //THIRD
  
  //useMemo(callback,[])

  const multipliedCount1 = useMemo(()=>calculateMultipliedCount1(count1),[count1]) ;
  const multipliedCount2 = useMemo(()=>calculateMultipliedCount2(count2),[count2]) ;

  return(
    <>
      <p>Multiplied Count1 : {multipliedCount1} </p>
      <p>Multiplied Count2 : {multipliedCount2} </p>
    </>
    
  )
};



console.log("rendered file App.js");  //FIRST

function App() {
  console.log("rendered App");  //SECOND

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  return (
    <>
      <h2>Hello From App.js</h2>
      <h2>useMemo</h2>
      <button onClick={()=>setCount1((prev)=>prev+1)}>{`Count 1 : ${count1}`}</button>
      <button onClick={()=>setCount2((prev)=>prev+1)}>{`Count 2 : ${count2}`}</button>
      <ShowMultipliedCount count1 = {count1} count2={count2}/>
    </>
  );
}

export default App;
