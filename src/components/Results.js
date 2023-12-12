import React, {Fragment} from 'react'

function Results({resultArr, handleClick, icon}) {
  return (
    <>
    {
      resultArr.map((result, index) => {
        return (
          <Fragment key={`result-${index}`}>
            <div className='song' key={`result-${index}`}>
              <div className='detail'>
                <h3>{result.name}</h3>
                <p>{result.artist}</p>
              </div>
              <div className='icon'>
                <button type='button' onClick={() => handleClick(result.id)}><i className={icon === 'plus'? 'fa fa-plus': 'fa fa-minus'}></i></button>
              </div>
            </div>
            <hr/>
          </Fragment>
        );
      })
    }
    </>
  )
}

export default Results;