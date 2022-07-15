import React from "react";
type Player = "X" | "O" | "BOTH" | null;

type SquareProps = {
	value: Player;
	winner: Player;
	onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick, winner }) => {
	if (!value) {
		return (
			<button
				className="square"
				onClick={onClick}
				disabled={Boolean(winner)}
			/>
		);
	}
	return (
		<button className={`square square_${value.toLowerCase()}`} disabled>
			{value}
		</button>
	);
};
export default Square;
