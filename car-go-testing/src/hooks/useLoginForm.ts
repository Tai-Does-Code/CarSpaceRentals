import { ISignupFormDetails } from "@/models/app";
import {UseFormReturnType, useForm} from "@mantine/form";

export const useLoginForm = (): UseFormReturnType<ISignupFormDetails> => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate:{
            // email
            email: (value:string) =>
            (/^\S+@\S+$/.test(value) ? null: 'Invalid Email'),

            // password
            password:(val: string) => 
            val.length<6
            ? 'Password should include at least 6 characters'
            : null,
        },

        

    })
    return form;

}