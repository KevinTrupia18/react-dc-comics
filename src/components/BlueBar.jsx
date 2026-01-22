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

function BlueBar() {
    return (
        <section>
            <div>
                {blueItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt="Icona servizio" />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BlueBar;


