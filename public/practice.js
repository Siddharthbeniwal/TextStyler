// to update name, email,pasword for ankit
const state={
    FormData:{
        name:"",
        email:"",
        password:"",
    },
    FormError:{
        name:"",
        email:"",
        password:"",
    },
    FormValid:{
        name:"false",
        email:"false",
        password:"false",
    },

    successMessage:"",
    errorMessage:"",
}

//to create a new state with updated state as formData with the key name value abc@gmail.com
const name="email"

// const newState ={
//         ...state,
//         formData :{
//             name:"ankit",
//             email: "ankit@gmail.com",
//             password: "ankit@123"
//         },
//         ErrorForm:{
//             ...state.ErrorForm,
//             password: "this field is required"
//         },
//         FormValid: {
//             ...state.FormValid,
//             password: "false"
//         }  
//     }


    const newState = {
        ...state,
        formData:{
            ...state.formData,
            [state.formData.name]:"abc@gmail.com"
        }
}

console.log('state my: ', state);
console.log('newstate my: ', newState);
