import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/notifications/styles.css';
import Link from "next/link";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AIESEC Logos",
    description: "Official repository of logos for AIESEC",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={`${inter.className} bg-gradient-to-bl from-gray-100 to-gray-200 h-full w-full`}>
                <div className={`flex flex-col h-full w-full min-h-screen min-w-screen`}>
                    <Header/>
        
                    <div className={`flex flex-row flex-grow text-gray-800 md:w-full`}>
                        <div className={`flex flex-row flex-grow justify-center items-center p-5`}>
                            <MantineProvider>{children}</MantineProvider>
                        </div>
                    </div>
                    
                    
                    <div className={`flex flex-col text-gray-900 text-sm font-light justify-center items-center p-3 space-y-5`}>
                        <div>developed by AIESEC International with 💙</div>
                    </div>
                </div>
            </body>
        </html>
    )
}
