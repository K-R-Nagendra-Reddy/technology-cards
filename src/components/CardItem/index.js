// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return <li className={className}>
      <h1 className="head" >{title}</h1>
      <p className="paragraph">{description}</p>
      <img className="image" src={imgUrl} alt={title}/>
  </li>
}
export default CardItem