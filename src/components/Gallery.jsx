import {useContext} from 'react'
import {DataContext} from '../context/DataContext'
import GalleryItem from './GalleryItem'


export default function Gallery(){
    const data = useContext(DataContext)
    const display =data.map((song, index)=>{
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