import {ReactNode} from "react";

export default async function LogoCategory({
											 children,
										 }: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className={"flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 items-start justify-start"}>
			{children}
		</div>
	)
}