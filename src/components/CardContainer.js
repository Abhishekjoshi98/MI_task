import Cards from "./Cards";

const CardContainer = ({ list }) => {
  return (
    <div className='card-cont-parent'>
      <div className='card-cont-child'>
        {list.map((card, idx) => {
          return (
            <Cards key={idx} singlecard={card} />
          )
        })}
      </div>
    </div>
  )
}

export default CardContainer;