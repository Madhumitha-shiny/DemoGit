
const Header = ({img,text}) => {
  return (
    <div align="center" className="HeadSection">
        <img src={img} alt="logo" height={25} width={75} />
        <h2 className="heading">{text}</h2>
        <p style={{fontSize:'18px'}}>to continue to Gmail okay</p>
    </div>
  )
}

export default Header;