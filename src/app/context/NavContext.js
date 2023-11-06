'use client';

import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<NavContext.Provider value={{ isNavOpen, toggleNav }}>
			{children}
		</NavContext.Provider>
	);
};

export const useNav = () => {
	return useContext(NavContext);
};
