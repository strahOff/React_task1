import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const lenghtNUMS = 10;
	const number = [...Array(lenghtNUMS).keys()];
	const NUMS = number.map((number) => String(number));
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const thereIsOperator = operator ? true : false;
	const thereIsOperand2 = operand2 ? true : false;

	const onClickOperandButton = (nam) => {
		if (!thereIsOperator) {
			setOperand1((prevOperand1) => {
				const newOperand1 = prevOperand1 + nam;
				console.log('Operand 1 = ', newOperand1);
				console.log('Operand 2 = ', operand2);
				return newOperand1;
			});
			setResult('');
		} else {
			setOperand2((prevOperand2) => {
				const newOperand2 = prevOperand2 + nam;
				console.log('Operand 1 = ', operand1);
				console.log('Operand 2 = ', newOperand2);
				return newOperand2;
			});
		}
	};

	const onClickSetOperator = (event) => {
		if (!thereIsOperand2) {
			setOperator(event.target.textContent);
			setResult('');
		}
	};

	const onClickEqualsButton = () => {
		if (operator === '+') {
			setOperand1((operand1) => Number(operand1) + Number(operand2));
			setOperand2('');
			setOperator('');
			setResult((operand1) => Number(operand1) - Number(operand2));
		} else {
			setOperand1((operand1) => Number(operand1) - Number(operand2));
			setOperand2('');
			setOperator('');
			setResult((operand1) => Number(operand1) - Number(operand2));
		}
	};

	const onClickToGoToFirstState = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	};

	const onClickInput = () => {};

	return (
		<div className={styles.container}>
			<div
				className={
					result
						? styles['input-container'] + ' ' + styles['result']
						: styles['input-container']
				}
			>
				{operand1}
				{operator}
				{operand2}
			</div>
			<div className={styles['number-content']}>
				<div className={styles['buttons-container']}>
					{NUMS.map((number, index) =>
						number === '0' ? null : (
							<>
								<button
									className={styles['button']}
									onClick={() => onClickOperandButton(number)}
									key={number}
								>
									{number}
								</button>
								{Number(number) % 3 === 0 ? <br /> : null}
							</>
						),
					)}
				</div>
				<div className={styles['buttons-container']}>
					{NUMS.map((number) => {
						if (number === '0') {
							return (
								<button
									className={styles['button']}
									onClick={() => onClickOperandButton(number)}
									key={number}
								>
									{NUMS[number]}
								</button>
							);
						}
					})}
				</div>
			</div>
			<div className={styles['buttons-container']}>
				{['+', '-'].map((operator) => {
					return (
						<button
							className={styles['button']}
							onClick={onClickSetOperator}
							key={operator}
						>
							{operator}
						</button>
					);
				})}
				<button className={styles['button']} onClick={onClickToGoToFirstState}>
					С
				</button>
				<button className={styles['button']} onClick={onClickEqualsButton}>
					=
				</button>
			</div>
		</div>
	);
};
