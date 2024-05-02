import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/notifications/styles.css';
import Link from "next/link";

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
                    {/*<Header/>*/}
        
                    <div className={`flex flex-row flex-grow text-gray-800 md:w-full`}>
                        <div className={`flex flex-row flex-grow justify-center items-center p-5`}>
                            <MantineProvider>{children}</MantineProvider>
                        </div>
                    </div>
        
        
                    <div className={`flex text-gray-900 text-sm font-light justify-center p-3`}>
                        <div>
                            developed by AIESEC International with 💙 | To learn how to use the logos, visit
                            <Link href={"https://drive.google.com/drive/folders/1uMvyMsiKSkNO78ZXm1KD1rNPAHnx7sNc?usp=drive_link"}>
                                <span className={"px-2 py-1 ml-2 text-xs text-white rounded-full bg-blue-600"}>aies.ec/bluebook</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
