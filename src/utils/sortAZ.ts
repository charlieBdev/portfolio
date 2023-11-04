export default function sortAZ(arr: string[]) {
	return arr.sort((a, b) =>
		a[0].toLowerCase().localeCompare(b[0].toLowerCase())
	);
}
