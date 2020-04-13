import React from 'react'

const Info2Column = (props) =>{
    return(
        <div className='row' style={{marginTop: '20px'}}>
            <div className='col-md-6'>
                <h5>{props.title1}</h5>
                <p>{props.content1}</p>
            </div>
            <div className='col-md-6'>
                <h5>{props.title2}</h5>
                <p>{props.content2}</p>
            </div>
        </div>
    )
}

export default Info2Column