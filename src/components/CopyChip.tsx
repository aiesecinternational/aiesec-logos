"use client";

import {notifications, Notifications} from '@mantine/notifications';

type Props = {
	value: string
	variant: "blue" | "white" | "black" | "teal" | "orange" | "red"
}

export default function CopyChip(props: Props) {
	let bgColor = "bg-white";
	let textColor = "text-gray-800";
	
	if (props.variant === "blue") {
		bgColor = "bg-blue-600";
		textColor = "text-white";
	}
	
	if (props.variant === "black") {
		bgColor = "bg-gray-800";
		textColor = "text-white";
	}
	
	if (props.variant === "teal") {
		bgColor = "bg-[#0cb9c1]";
		textColor = "text-white";
	}
	
	if (props.variant === "orange") {
		bgColor = "bg-[#f48924]";
		textColor = "text-white";
	}
	
	if (props.variant === "red") {
		bgColor = "bg-[#f85a40]";
		textColor = "text-white";
	}
	
	const copyValue = () => {
		navigator.clipboard.writeText(props.value).then(() => {
			console.log("Copied to clipboard:", props.value);
			notifications.show({
				title: "Copied to clipboxard",
				message: props.value,
				color: props.value,
			})
		});
	}
	
	return (
		<>
			<div onClick={copyValue}
				 className={`rounded-full ${bgColor} ${textColor} bg-opacity-50 hover:bg-opacity-100 px-4 py-1 transition-all hover:cursor-pointer font-bold`}>Copy
			</div>
			
			<Notifications/>
		</>
	);
}

