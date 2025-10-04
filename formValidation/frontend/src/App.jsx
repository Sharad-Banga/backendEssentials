import { useForm } from "react-hook-form"
import './App.css'

function App() {
    const {
    register,
    handleSubmit,
    watch,
    
    formState: {isSubmitting, errors },
  } = useForm()
  return (
    <>sss

      <form  onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 1000))

         
          const res = await fetch("http://localhost:3000/signupp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })

          const result = await res.json()
          console.log("Server response:", result)
        })}>

        <div>
          <label htmlFor="">email</label>
          <input type="text" {...register("email" , {required:true ,
            pattern:{
              value:/^[A-Za-z0-9+$]/,
              message:"enter valid gmail"
            }
          })}  />
        </div>

        <div>
          <label htmlFor="">password</label>
          <input type="text" {...register("password" , {required:true , 
          
          pattern:{
            value :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

            message : "enter valid password"

          }} )} />

          {errors.password && <p>{errors.password.message}</p> }
        </div>

        <div>
          <input type="submit" disabled={isSubmitting}  />
        </div>


      </form>
          
    </>
  )
}

export default App
