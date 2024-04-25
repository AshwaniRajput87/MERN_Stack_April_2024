import './pagination.css';

const Pagination = ({totalPages, currentPage, paginate}) =>{
    console.log(totalPages);
    return (
        <>
          <div className="page-container">
            {
                Array.from({length: totalPages}).map((_, index)=>{ // Array.from({length: totalPages}) -> [0,1,2,3,4,5]
                    return <button 
                    key={index+1}
                    className='pagination-btn' 
                    onClick={()=>{paginate(index+1)}}>
                        {index+1}
                    </button>
                })
            }
          </div>
         
        </>
    )
}

export default Pagination;