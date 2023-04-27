export function getClassname(...classes) {
	return classes.filter(Boolean).join(' ');
}
