export default function Title({mainTitle, subTitle}){
    return (
        <div>
            <h1 style={{"borderBottom" : "5px solid red", "textAlign" : "center"}}>
                {mainTitle}
            </h1>
        </div>
    )
}