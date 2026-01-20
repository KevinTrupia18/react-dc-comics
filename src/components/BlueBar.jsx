const blueItems = [
    {
        img: "/img/buy-comics-digital-comics.png",
        text: "DIGITAL COMICS",
    },
    {
        img: "/img/buy-comics-merchandise.png",
        text: "DC MERCHANDISE",
    },
    {
        img: "/img/buy-comics-subscriptions.png",
        text: "SUBSCRIPTION",
    },
    {
        img: "/img/buy-comics-shop-locator.png",
        text: "COMIC SHOP LOCATOR",
    },
    {
        img: "/img/buy-dc-power-visa.svg",
        text: "DC POWER VISA",
    },
];

export default function BlueBar() {
    return (
        <section className="blue-bar">
            <div className="blue-container">
                {blueItems.map((item, index) => (
                    <div className="blue-card" key={index}>
                        <img src={item.img} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

