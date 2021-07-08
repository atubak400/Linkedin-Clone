import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				{/* logo */}
				<img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='Linkedin Logo' />
				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
		</div>
	)
}

export default Header
