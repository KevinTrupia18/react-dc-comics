import ComicCard from "./ComicCard";
import comics from "../data/comics";

function ComicsSection() {
    return (
        <section>
            <h2>CURRENT SERIES</h2>

            <div>
                {comics.map((comic) => (
                    <ComicCard
                        key={comic.id}
                        comic={comic}
                    />
                ))}
            </div>

        </section>
    );
}

export default ComicsSection;

