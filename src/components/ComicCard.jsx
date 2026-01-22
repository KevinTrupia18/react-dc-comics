function ComicCard(props) {
    return (
        <div className="comic-card">
            <img src={props.comic.thumb} alt="Copertina del fumetto" />
            <h5>{props.comic.series}</h5>
        </div>
    );
}

export default ComicCard;






