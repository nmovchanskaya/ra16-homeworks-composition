export const Card = ({children, img}:any) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt="Hey image"/>
            {children}
        </div>
    )
}
