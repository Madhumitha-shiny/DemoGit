
const Body = () => {
  return (
    <div className="BodySection">
        <form>
            <input style={{margin:'7% 7% 2% 7%', padding:'3%',border:'1px solid rgb(205, 205, 205)',borderRadius:'5px',outline:'none'}} 
                   type="text" placeholder="Email or phone" 
                   size={45}/><br/>
            <a style={{margin:'7%', textDecoration:'none'}} href="#">Forgot email?</a>
            <p style={{margin:'10% 7% 7% '}}>Not your computer? Use Guest mode to sign in privately. <span><a style={{textDecoration:'none'}} href="#">Learn more</a></span></p>
        </form>
    </div>
  )
}

export default Body