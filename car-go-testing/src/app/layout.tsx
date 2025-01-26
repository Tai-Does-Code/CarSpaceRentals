import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import Navbar from "@/components/Navbar";
import LogInPage from "./login/LogInPage";
import SignUpPage from "./signup/SignUpPage";
import { UserSessionContextProvider } from "@/context/UserSessionContext";
import {ToastContainer} from 'react-toastify';


export const metadata: Metadata = {
  title: "Car testing",
  description: "Car rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          <UserSessionContextProvider>

          <Navbar />
          <LogInPage />
          <SignUpPage />
          {children}
          <ToastContainer />

          </UserSessionContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
