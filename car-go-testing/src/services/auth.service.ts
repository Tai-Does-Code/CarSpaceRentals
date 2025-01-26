import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthTokenResponse } from "@supabase/supabase-js";

export const SignupWithEmailPassword = async (
    email: string, 
    password: string
    ): Promise<AuthTokenResponse> => {
    const supabase = createClientComponentClient();

    const res = await supabase.auth.signUp({email, password});

    return res; 

}

export const logInWithEmailPassword = async (
    email: string, 
    password: string
) => {
    const supabase = createClientComponentClient();
    const res = await supabase.auth.signInWithPassword({email, password});
    return res;
}


export const logOut = async () => {
    const supabase = createClientComponentClient();
    const res = await supabase.auth.signOut();
    return res;
}