import Link from "next/link";
import {GoogleButton} from './GoogleButton';
import classes from './Style.module.css';
import { Anchor, Box, Button, Divider, Group, Paper, PaperProps, PasswordInput, Stack, TextInput, Text, LoadingOverlay } from "@mantine/core";
import { useLoginForm } from "@/hooks/useLoginForm";
import { logInWithEmailPassword } from "@/services/auth.service";
import { useState } from "react";
import { NotRegisteredAlert } from "./NotRegisteredAlert";
import { NotVerifiedAlert } from "./NotVerifiedAlert";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const errorMessage = "Invalid login credentials";

export function Login(props: PaperProps){
    const [notRegistered, setNotRegistered] = useState(false);
    const [notVerified, setNotVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const {push} = userRouter();

    const form = useLoginForm();

    const handleLogin = async () => {
        const {email, password} = form.values;
        setIsSubmitting(true); 

        const {error, data} = await logInWithEmailPassword(email, password);
        setIsSubmitting(false); 

        if(error && error.message === errorMessage) {
            console.log(error);
            setNotRegistered(true);
        } else {
            if(data.user == null || data.session == null){
                setNotVerified(true);
            }
            form.reset();
            setNotRegistered(false);
            setNotVerified(false);
            


            push('/');
            toast.success('Login Successful', {position: toast.POSITION.TOP_CENTER,});
                }
    }

    return(
        <Box px="md" py="xl">
            <Paper className={classes.formPaper} withBorder {...props} >
            <LoadingOverlay 
         visible={isSubmitting}
         overlayProps={{radius: 'sm', blur: 2}}
         />
                <Text size="lg" fw={500}>
                    Welcome Back!
                </Text>
                <GoogleButton />
                <Divider 
                label="Or continue with email" 
                labelPosition="center" 
                my="lg" 
                />
                <form onSubmit={form.onSubmit(()=>handleLogin())}>
                    <Stack>
                        <TextInput 
                        required
                        label="Email"
                        placeholder="example@gmail.com"
                        radius="md"
                        value ={form.values.email}
                        onChange={(event)=> form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && form.errors.email}
                        />

                        <PasswordInput 
                        required
                        label="Password"
                        placeholder="Password"
                        radius="md"
                        value ={form.values.password}
                        onChange={(event)=> form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && form.errors.password}
                        />
                    </Stack>

                    {notRegistered && <NotRegisteredAlert />}
                    {notVerified && <NotVerifiedAlert />}

                    <Group justify="space-between" mt="xl">
                        <Anchor
                        component={Link}
                        href="/signup"
                        type="button"
                        c="dimmed"
                        size="xs"
                         >
                            Don{`'`}t have an account? Register!
                        </Anchor>
                        <Button type="submit" radius="xl" >
                            Login
                        </Button>
                    </Group>

                    <Group mt="xl">
                    <Anchor
                        component={Link}
                        href="/providers"
                        type="button"
                        c="dimmed"
                        size="xs"
                         >
                            Want to rent out your car? Create a provider account!
                        </Anchor>
                    </Group>
                </form>
            </Paper>
        </Box>
    )
}
function userRouter(): { push: any; } {
    throw new Error("Function not implemented.");
}

