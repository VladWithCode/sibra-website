import React, { useState } from 'react';
import Search from './Search';
import { getClassname } from '../../../utils';

function Hero() {
	const [contract, setContract] = useState('compra');

	const onSelect = value => {
		setContract(value);
	};

	return (
		<div className="flex flex-col w-full h-96 mx-auto relative overflow-hidden">
			<div className="bg-slider w-full h-full z-0 absolute top-0">
				<img
					className="object-cover object-center h-full w-full"
					src="/img/buildings.jpg"
					alt="bg slider"
				/>
			</div>
			<div className="overlay w-full h-full bg-black opacity-60 absolute top-0 z-10"></div>
			<h1 className="max-w-[95%] text-2xl text-center text-slate-100 font-semibold pb-2 z-20 m-auto mb-0">
				¡Encuentra la casa que estas buscando!
			</h1>
			<div className="ui m-auto mt-0 w-60 max-w-[95%] z-20 flex flex-col">
				<Search
					parameters={{ contract }}
					onSubmit={(data, parameters) =>
						console.log(data, parameters)
					}
				/>
				<Select onSelect={onSelect}>
					<Option value="compra">Comprar</Option>
					<Option value="renta">Renta</Option>
				</Select>
			</div>
		</div>
	);
}

export default Hero;

function Select({ onSelect, children }) {
	const [currentSelect, setCurrentSelect] = useState('compra');

	const _onSelect = value => {
		onSelect(value);

		setCurrentSelect(value);
	};

	const childrenWithHandler = React.Children.map(children, child => {
		if (!React.isValidElement(child)) return child;

		if (child.props.defaultActive && !currentSelect)
			setCurrentSelect(child.props.value);

		return React.cloneElement(child, {
			currentSelection: currentSelect,
			onSelect: _onSelect,
		});
	});

	return (
		<div className="select flex flex-grow bg-slate-200 text-white text-center font-semibold my-2 rounded-md overflow-hidden">
			{childrenWithHandler}
		</div>
	);
}

function Option({ children, value, currentSelection, onSelect }) {
	const isActive = currentSelection === value;

	return (
		<div
			className={getClassname(
				'flex-1 basis-1/2 rounded p-1 transition-[background] duration-200 cursor-pointer',
				isActive
					? 'bg-slate-700 text-slate-100'
					: 'bg-transparent text-slate-400'
			)}
			onClick={() => onSelect(value)}>
			{children}
		</div>
	);
}
