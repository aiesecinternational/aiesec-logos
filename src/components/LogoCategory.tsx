import {ReactNode} from "react";

type Props = {
	children: ReactNode
	spacing?: boolean
}

export default async function LogoCategory(props: Props) {
	const spacing = props.spacing ? props.spacing : false;
	
	return (
		<div className={`flex flex-col ${spacing ? "space-y-5" : ""} md:flex-row md:space-y-0 md:space-x-5 items-center justify-center w-full`}>
			{props.children}
		</div>
	)
}