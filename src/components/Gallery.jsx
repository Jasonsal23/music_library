import GalleryItem from './GalleryItem'

export default function Gallery(props){
    const display =props.data.map((song, index)=>{
        return(
            <GalleryItem song={song} key={index}/>
        )
    }) 

    return(
        <div>
        {display}
        </div>
    )
}