import { ISignupFormDetails } from "@/models/app";
import {UseFormReturnType, useForm} from "@mantine/form";

export const useSignupForm = (): UseFormReturnType<ISignupFormDetails> => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            terms: true,
        },

        validate:{
            // email
            email: (value:string) =>
            /^\S+@\S+$/.test(value) ? null: 'Invalid Email',

            // password
            password:(val: string) => 
            val.length<6
            ? 'Pssword should include at least 6 characters'
            : null,
            
            // confirm password
            confirmPassword:(val: string, {password}) =>
            val !== password ? 'Password does not match' : null,

            // terms box
            terms: (terms: boolean) =>
            !terms ? 'You need to accept terms and conditions' : null,
        },

        

    })
    return form;

}