import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>

      <form onSubmit={handleSubmit((data)=>{
          console.log("data is ",data);
          
      })}>

          <div>
            <label >First name</label>
            <input type="text"  {...register("email" , {required:true })} />
          </div>

          <div>
            <label >First name</label>
            <input type="text"  {...register("password" , {required:true})} />
          </div>

          <div>
            <input type="submit"  />
          </div>

      </form>
          
    </>
  )
}

export default App
