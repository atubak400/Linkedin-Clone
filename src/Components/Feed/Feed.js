import './feed.css'
import ImageIcon from '@material-ui/icons/Image'
import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../InputOption/InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption
            Icon={SubscriptionsIcon}
            title='Video'
            color='#7E7A33E'
          />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>
    </div>
  )
}

export default Feed
