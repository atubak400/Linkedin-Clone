import './headerOption.css'
import React from 'react'
import { Avatar } from '@material-ui/core'

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className='headerOption__Icon' src={avatar} />}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption