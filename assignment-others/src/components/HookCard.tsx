import { ReactNode } from "react";

interface HookCardProps {
	title: string;
	children?: ReactNode;
}

export default function HookCard({ title, children }: HookCardProps) {
	return (
		<div className="card w-auto bg-base-200 card-lg shadow-sm">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				{children}
			</div>
		</div>
	);
}
