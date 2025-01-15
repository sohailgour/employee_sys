import { useContext, useEffect, useState } from "react"
import Admindash from "./components/Dasboard/Admindash"
import EmployeeDash from "./components/Dasboard/EmployeeDash"
import Login from "./components/Login"
import { AuthContext } from "./context/AuthProvider"
import { setLocalStorage } from "./utils/LocalStorage"


function App() {
 
  // localStorage.clear();
  // setLocalStorage();


const [user, setUser] = useState(null) 
const [loggedInData, setLoggedInData] = useState('');

const Authdata = useContext(AuthContext);

useEffect(() => {
 const loggedINUser = localStorage.getItem('loggedINUser')
  if(loggedINUser){
    const userData = JSON.parse(loggedINUser)
    setUser(userData.role);
    setLoggedInData(userData.data)
  }
}, [])






// console.log(Authdata)
  
const handleLogin =(email,password)=>{
  
  if(Authdata.admin.find((e)=>email==e.email && password==e.password)){
    setUser('admin')
    localStorage.setItem('loggedINUser',JSON.stringify({role:'admin'}));
  }else if(Authdata ){
    const employee = Authdata.employees.find((e)=>email==e.email && password==e.password)
   if(employee){
    setUser('employee');
    setLoggedInData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
}
  }
  else{
    alert('invalid Credentials')
  }
}

 

  // handleLogin( "use@me.com",123);
  return (
   <>
   {!user ? <Login  handleLogin={handleLogin}/> : ''}
   {user== 'admin' ? <Admindash  changeUser = {setUser}/>:(user=='employee'? <EmployeeDash changeUser = {setUser} data ={loggedInData}/>:null)}
   {/* <EmployeeDash/> */}
   {/* <Admindash/> */}
   </>
  )
}

export default App
