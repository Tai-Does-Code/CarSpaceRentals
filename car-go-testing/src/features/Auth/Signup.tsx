"use client";

import Link from "next/link";
import {GoogleButton} from './GoogleButton';
import classes from './Style.module.css';
import { Anchor, Box, Button, Divider, Group, Paper, PaperProps, PasswordInput, Stack, TextInput, Text, Checkbox, LoadingOverlay } from "@mantine/core";
import {Logo} from '@/components/Navbar/Logo';
import { useSignupForm } from "@/hooks/useSignupForm";
import { SignupWithEmailPassword } from "@/services/auth.service";
import { useState } from "react";
import { EmailConfirmation } from "@/components/EmailConfirmation";
import { toast } from "react-toastify";


export function Signup(){
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const signupForm = useSignupForm();


    const handleSignup = async ( ) => {
        const {email, password}= signupForm.values;
        setIsSubmitting(true);      


        const {error} = await SignupWithEmailPassword(email, password);

        if(error){
            toast.error('Error Signing Up');
            setIsSubmitting(true);      

        }else{
            setIsSubmitting(false);
            setIsSubmitted(true);      
 
            toast.success('Signup Successful')
        }
    }




    return(
        <>
        {isSubmitted ? ( 
        <EmailConfirmation email={signupForm.values.email} /> )
        :(
        <>
        <LoadingOverlay 
         visible={isSubmitting}
         overlayProps={{radius: 'sm', blur: 2}}
         />
        <Box px="md" py="xl">
            <Paper className={classes.formPaper} withBorder >
                <Text size="lg" fw={500}>
                    Welcome to <Logo />
                </Text>
                <GoogleButton />
                <Divider 
                label="Or continue with" 
                labelPosition="center" 
                my="md" 
                />
                <form onSubmit={signupForm.onSubmit(() => handleSignup())}>
                    <Stack>
                        <TextInput 
                        required
                        label="Email"
                        placeholder="example@gmail.com"
                        radius="md"
                        value ={signupForm.values.email}
                        onChange={(event)=> signupForm.setFieldValue('email', event.currentTarget.value)}
                        error={signupForm.errors.email && signupForm.errors.email}
                        />
                        
                        <PasswordInput 
                        required
                        label="Password"
                        placeholder="Password"
                        radius="md"
                        value ={signupForm.values.password}
                        onChange={(event)=> signupForm.setFieldValue('password', event.currentTarget.value)}
                        error={signupForm.errors.password && signupForm.errors.password}
                        />

                        

                        <PasswordInput 
                        required
                        label="Confirm Password"
                        placeholder="Confirm your Password"
                        radius="md"
                        value ={signupForm.values.confirmPassword}
                        onChange={(event)=> signupForm.setFieldValue('confirmPassword', event.currentTarget.value)}
                        error={signupForm.errors.confirmPassword && signupForm.errors.confirmPassword}
                        />
                        <Checkbox 
                        label="i accept the terms and conditions" 
                        checked={signupForm.values.terms} 
                        onChange={(event)=> signupForm.setFieldValue('terms', event.currentTarget.checked)}
                        error={signupForm.errors.terms && signupForm.errors.terms}
                        />

                    </Stack>

                    <Group justify="space-between" mt="xl">
                        <Anchor
                        component={Link}
                        href="/login"
                        type="button"
                        c="dimmed"
                        size="xs"
                         >
                            Already have an account? Login!
                        </Anchor>
                        <Button type="submit" radius="xl" >
                            Sign Up
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
        </>
        )}
        </>
    )
}