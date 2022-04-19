import React from 'react';
import cn from 'classnames';
import { usePagination, DOTS } from '../assets/hooks/usePagination';
import '../styles/pagination.scss'
import propTypes from 'prop-types';
const Pagination = React.memo(({ onPageChange, totalPageCount, siblingCount = 1, currentPage }) => {
	const paginationRange = usePagination({ currentPage, totalPageCount, siblingCount })
	if (currentPage === 0 || paginationRange.length < 2) {
		return null
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul className={cn('pagination')}>
			<li
				className={cn('page', {
					disabled: currentPage === 1
				})}
				onClick={onPrevious}
			>
				<div className="arrow left" />
			</li>
			{paginationRange.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return <li key={index} className="page dots">&#8230;</li>;
				}

				return (
					<li
						key={index}
						className={cn('page', {
							selected: pageNumber === currentPage
						})}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={cn('page', {
					disabled: currentPage === lastPage
				})}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
		</ul>
	);
});
Pagination.propTypes = {
	onPageChange: propTypes.func.isRequired,
	totalPageCount: propTypes.number.isRequired,
	siblingCount: propTypes.number,
	currentPage: propTypes.number.isRequired
}
export default Pagination;