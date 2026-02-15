import React from 'react'
import tictac from '../assets/tictac.png'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import LeaderBoard from '../components/LeaderBoard'

function Home() {
  return (
    <>
      <div className='hello_section'>
        <div className='left_part'>
            <h1 className='head_message_hero'>MASTER THE GRID</h1>
            <p className='paragraph_message_hero'>Climb the global leaderboard and prove you are the ultimate strategist. No draws allowed.</p>
            <div className='playing_btn'>
                <Link to='/board'><button className='play_button'>PLAY NOW</button></Link>
                <div className='choose_who'>
                    <button className='play_button' >VS. Computer</button>
                    <button className='play_button'>LOCAL 2-PLAYER</button>
                </div>
            </div>
        </div>
        <div className='right_part'>
          <div>
            <img className='tic_tac_img' src={tictac} alt='Tictac image'/>
            </div>
            <div>
              <LeaderBoard/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home