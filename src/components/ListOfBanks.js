import React from 'react'
import { Link } from 'react-router-dom'
import Banks from './Banks'

export default function ListOfBanks() {

  return (
    <main>
      <section>
        <h1>List of Banks</h1>
        <div className='container-for-banks'>
          <Banks/>
          <Link to="/addbank">
          <div className='bank'>
            <h2>Add new bank</h2>
          </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
