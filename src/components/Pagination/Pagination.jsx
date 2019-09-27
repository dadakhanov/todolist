import React from 'react'
import styles from './Pagination.module.css'
import PropTypes from 'prop-types'

const propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageMax: PropTypes.number,
    pageCount: PropTypes.number.isRequired,
    switchPage: PropTypes.func.isRequired
}

export default function Pagination({ currentPage, pageMax, pageCount, switchPage}) {
    //const pageCount = Math.ceil( itemCount / pageSize)
    if (pageCount < 2) 
        return <div/>
    
    // < 1 > >>  < 1 > <<    
    if ((pageMax===4) && (pageCount>6)) {        
        return <div>         
            <button onClick={() => switchPage(currentPage-1)}
                        disabled={currentPage === 1}
                        className={styles.pageButton} >
                        {"<"}
            </button>      
            <button onClick={() => switchPage(currentPage)}
                        className={styles.pageButton + " " + styles.active} >
                        {currentPage}
            </button>                            
            <button onClick={() => switchPage(currentPage+1)}
                        disabled={currentPage === pageCount}
                        className={styles.pageButton} >
                        {">"}
            </button>      
            {currentPage===pageCount
            ? <button onClick={() => switchPage(1)}
                        disabled={currentPage === 1}
                        className={styles.pageButton} >
                        {"<<"}
            </button>      
            : <button onClick={() => switchPage(pageCount)}
                        disabled={currentPage === pageCount}
                        className={styles.pageButton} >
                        {">>"}
            </button>      
            }
        </div>
    }

    // < 1 >
    if ((pageMax<=4) && (pageCount>6)) {        
        return <div>
            <button onClick={() => switchPage(currentPage-1)}
                        disabled={currentPage === 1}
                        className={styles.pageButton} >
                        {"<"}
            </button>      
            <button onClick={() => switchPage(currentPage)}
                        className={styles.pageButton + " " + styles.active} >
                        {currentPage}
            </button>                            
            <button onClick={() => switchPage(currentPage+1)}
                        disabled={currentPage === pageCount}
                        className={styles.pageButton} >
                        {">"}
            </button>      
        </div>
    }
    
    // << < 1 > >>
    if ((pageMax<=6) && (pageCount>=6)) {        
        return <div>
            <button onClick={() => switchPage(1)}
                        disabled={currentPage === 1}
                        className={styles.pageButton} >
                        {"<<"}
            </button>      
            <button onClick={() => switchPage(currentPage-1)}
                        disabled={currentPage === 1}
                        className={styles.pageButton} >
                        {"<"}
            </button>      
            <button onClick={() => switchPage(currentPage)}
                        className={styles.pageButton + " " + styles.active} >
                        {currentPage}
            </button>                            
            <button onClick={() => switchPage(currentPage+1)}
                        disabled={currentPage === pageCount}
                        className={styles.pageButton} >
                        {">"}
            </button>      
            <button onClick={() => switchPage(pageCount)}
                        disabled={currentPage === pageCount}
                        className={styles.pageButton} >
                        {">>"}
            </button>      
        </div>
    }

    // for all other cases when pageMax >= 7 
    // 12345..9 1..56789  1..456..9
    const middlePage = Math.round(pageMax / 2)

    let pages = []

    for (let i=1; i <= pageMax+1; i++) {
        pages.push("")
    }  

    if (pageCount <= pageMax){
        for (let i = 1; i <= pageCount; i++)
            pages[i] = i
    }
    else if (currentPage <= middlePage) {
        for (let i = 1; i <= pageMax; i++) {
            pages[i] = i
        }
        pages[pageMax - 1] = ".."
        pages[pageMax] = pageCount
    }
    //else if ( currentPage >= pageCount - middlePage ) {              
    else if ( currentPage > pageCount - middlePage //+ (lastPage >= currentPage ? 1 : 0) 
    ) 
    {              
        //debugger                  
        let c = 0
        for (let i = pageMax; i >= 1; i--) {
            pages[i] = pageCount - c
            c++
        }
        pages[1] = 1
        pages[2] = ".."
    }
    else {
        let c = 0
        //
        for (let i = middlePage; i >= 1; i--) {
            pages[i] = currentPage - c //- (lastPage >= currentPage ? 1 : 0)
            c++
        }
        c = 0
        for (let i = middlePage; i <= pageMax; i++) {
            pages[i] = currentPage + c  //- (lastPage >= currentPage ? 1 : 0)
            c++
        }
        pages[1] = 1
        pages[2] = ".."
        if (pages[pageMax - 1]!==pageCount-1)
            pages[pageMax - 1] = ".."
        pages[pageMax] = pageCount
    }

    
    return (
        <div>
            {pages
                .filter(v=> v!=="")
                .map((v,i) => <button key={i} onClick={() => switchPage(v)}
                        disabled={v === ".."}
                        className={styles.pageButton + " " +  (v === currentPage ? styles.active : "")} >
                        {v}
                </button>                
            )}

        </div>
    )
}

Pagination.propTypes = propTypes
