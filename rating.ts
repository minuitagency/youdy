interface ratingProps{
	rating: {1: number, 2: number, 3: number, 4: number, 5: number}
}

export function rating ({rating}: ratingProps) {
	return (
			Object.values(rating).reduce(
					(acc, curr, index) => acc + (curr || 0) * (index + 1),
					0,
			) / Object.values(rating).reduce((acc, curr) => acc + (curr || 0), 0)
	);
}
