import { useForm } from "react-hook-form"


const AddContact = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {console.log(data)
    fetch('http://localhost:8080/api/contacts',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
        .then(response => response.json())

    window.location.reload()
  }

    return (
        
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" {...register("firstName")} type="text" className="validate" />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                     <div className="input-field col s6">
                         <input id="last_name" {...register("lastName")} type="text" className="validate" />
                         <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" {...register("email")} type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact