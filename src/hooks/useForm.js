import { useState } from "react"

export const useForm = (initialForm = {}) => {
    
    const [formState, setformState] = useState( initialForm
        // username: 'Ayaka',
        // email: 'KamizatoAyaya@jenshin.com',
        // pass: '123456'	
    )


    const onInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })

    }

    const onResetForm = () => {
        setformState(initialForm)
    }
    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm
    }
}