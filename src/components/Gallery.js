import GalleryItem from './GalleryItem'

function Gallery(props){
      const display= props.data.map((item, index) => {return (
        <div>
            <GalleryItem item={item} key={index}></GalleryItem>
        </div>
    )
})
return (
    <div>
        {display}
    </div>
)
}

export default Gallery
