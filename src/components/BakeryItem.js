// TODO: create a component that displays a single bakery item

export default function singleBakeryItem(item) {
    return (
        <div>
            {<img style={{width:"20%"}} src={item.image} />}
            <h3>{item.name}</h3>
            <h4>Price: {item.price}</h4>
            <p>{item.description}</p>
        </div>
    )
}