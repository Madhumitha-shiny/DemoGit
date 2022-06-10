import React from 'react'

const Button = ({onClick}) => {
  return (
    <div style={{marginTop:'5%'}} className='FooterSection'>
        <a onClick={onClick} style={{margin:'7%', textDecoration:'none',padding: '2%'}} href="#">Create account</a>
        <div style={{float:'right', marginRight:'8%'}} className='btn btn-primary'>Next</div>
    </div>
  )
}

export default Button