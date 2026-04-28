import { useEffect, useState } from "react"
import SingleContact from "./SingleContact"
import AddContact from "./AddContact"


const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        try {
        fetch('http://localhost:8080/api/contacts')
            .then((res) => res.json())
            .then((res) => {setContacts(res)})    
        } catch (error) {
            console.log("r", error)
        }
        
    }, [])
    return <div>
        <div className="row">
            <AddContact />
        </div>
        <div className="row">
        
            <ul>
                {contacts.map(c => <SingleContact item={c} key={`${c.firstName}-${c.lastName}`} />)}
            </ul>
        </div>
    </div>
}

export default Contacts