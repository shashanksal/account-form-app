import { useRef, useEffect } from 'react';

const useUnload = (fn) => {
	console.log('Here');
	const cb = useRef(fn); // init with fn, so that type checkers won't assume that current might be undefined

	useEffect(() => {
		cb.current = fn;
	}, [fn]);

	useEffect(() => {
		const onUnload = cb.current;

		window.addEventListener('beforeunload', onUnload);

		return () => window.removeEventListener('beforeunload', onUnload);
	}, []);
};

export default useUnload;
