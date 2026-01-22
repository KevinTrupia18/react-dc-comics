

const menuItems = [
    "CHARACTERS",
    "COMICS",
    "MOVIES",
    "TV",
    "GAMES",
    "COLLECTIBLES",
    "VIDEOS",
    "FANS",
    "NEWS",
    "SHOP",
];

function MainHeader() {
    return (
        <header>
            <img src="/img/dc-logo.png" alt="Logo DC" />

            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </header>
    );
}

export default MainHeader;




