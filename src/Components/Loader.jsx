import React from 'react';
import loaderImg1 from '../assets/images/loader1.png'
import loaderImg2 from '../assets/images/loader2.png'
import '../styles/loader.scss'
import cn from 'classnames';

const Loader = () => {
	const images = [loaderImg1, loaderImg2]
	const random = Math.floor(Math.random() * images.length);
	return (
		<div className='loader'>
			<div className={cn({ animationBlock1: random === 0 }, { animationBlock2: random === 1 })}>
				<img src={images[random]} alt={"Loading..."} /></div>
		</div>
	);
};

export default React.memo(Loader);