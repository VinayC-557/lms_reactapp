import "./Homewallpaperimage"
export default function Homewallpaperimage(props){

    return(
        <div className="div">
        <center>
        <img className="image" src={props.source} alt={props.name} height={780} width={800}/>
        </center>
    </div>
    )
}