export default function SideBar() {
    let list = []
    for (let i = 0; i < 40; i++) {
        list.push(<div className="row">
            <img src="https://developers.elementor.com/path/to/placeholder.png" alt=""/>
            <div>Sample album, podcast, song</div>
            <div>Sample description</div>
        </div>)
    }
    return <aside className="d-none d-sm-block col-sm-1 col-md-1 col-lg-2 bg-primary rounded-3 p-3 d-flex flex-column">
        <div className="d-flex flex-column overflow-y-scroll">
            <div>Tracks you like</div>
            <div>Albums</div>
            <div>Playlists</div>
            <div>Recently added</div>
            {list}
        </div>

    </aside>
}