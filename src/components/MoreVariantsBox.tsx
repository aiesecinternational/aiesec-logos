import LinkChip from "@/components/LinkChip";

type Props = {
	url: string
	variants: string[]
	background: "blue" | "white" | "black" | "teal" | "orange" | "red"
	buttonColor: "blue" | "white" | "black" | "teal" | "orange" | "red"
}

export default function MoreVariantsBox(props:Props) {
	return (
		<div>
			<div className={`relative flex-col items-center justify-center p-0 w-0 h-72 rounded-md hidden md:flex`}>
				<div className={"flex flex-row text-white font-bold text-xs items-center justify-between space-x-5"}>
					<div className={"flex flex-col space-x-2 items-center space-y-5 ml-16"}>
						<LinkChip text={"More"} url={props.url} variant={props.background}/>
						{/*<div className={'flex flex-wrap space-x-1 font-normal text-[10px]'}>*/}
						{/*	<span>&middot; </span>*/}
						{/*	{props.variants.map(variant => (*/}
						{/*		<span key={variant}>{variant} &middot;</span>*/}
						{/*	))}*/}
						{/*</div>*/}
					</div>
				</div>
			</div>
		</div>
	);
}
