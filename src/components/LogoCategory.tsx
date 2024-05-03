import {ReactNode} from "react";

type Props = {
	children: ReactNode
	spacing?: boolean
	grid?: boolean
}

export default async function LogoCategory(props: Props) {
	const spacing = props.spacing ? props.spacing : false;
	const grid = props.grid ? props.grid : false;
	
	return (
		<div className={`${grid ? "grid grid-cols-2 md:grid-cols-6 gap-5" : `flex flex-col ${spacing ? "space-y-5" : ""} md:flex-row md:space-y-0 md:space-x-5 items-center justify-center w-full`}`}>
			{props.children}
		</div>
	)
}