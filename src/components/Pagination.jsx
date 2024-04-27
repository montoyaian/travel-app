import React from 'react'
export const Pagination = ({total, postsPage, setPage}) => {
    let page= []
    for (let i =1 ; i<= Math.ceil(total/postsPage); i++){
        page.push(i)
    }
  return (
    <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => setPage(1)}
          aria-label="First"
        >
          <span aria-hidden="true">&laquo;&laquo;</span>
        </button>
      </li>
      {page.map((pageNumber, index) => (
        <li key={index} className="page-item">
          <button
            className="page-link"
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => setPage(Math.ceil(total / postsPage))}
          aria-label="Last"
        >
          <span aria-hidden="true">&raquo;&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
)
}
export default Pagination