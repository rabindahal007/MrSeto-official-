import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'

const PlayerNumber = ({ onSubmit }) => {
  const [page, setPage] = useState(1)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(page)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 text-black">
      <h2 className="text-xl text-center sm:text-3xl font-bold text-white">
  Select Number of Players
</h2>

      
      {/* White background div wrapping pagination and button */}
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center space-y-4">
       <div className="overflow-x-auto px-4">
  <Pagination
    count={12} // Max 12 players allowed
    page={page}
    size="large"
    onChange={handlePageChange}
    color="secondary"
    showFirstButton
    showLastButton
  />
</div>
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:text-base"
        >
          Submit
        </button>
      
    </form>
  )
}

export default PlayerNumber
