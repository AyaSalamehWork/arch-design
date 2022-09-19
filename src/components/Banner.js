import BannerCard from "./BannerCard";
import icon1 from "../img/web-design2.svg";
import icon2 from "../img/couch-sofa.svg";
import icon3 from "../img/web-design.svg";

const CARD_CONTENT = [
    {
        id: "card1",
        title: "Design & Planing",
        imgUrl: icon1,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    },
    {
        id: "card2",
        title: "Interior Design",
        imgUrl: icon2,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    },
    {
        id: "card3",
        title: "Exterior Design",
        imgUrl: icon3,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    },
];

const CARD_CONTENT_RTL = [
    {
        id: "card1",
        title: "التصميم والتخطيط",
        imgUrl: icon1,
        description:
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    },
    {
        id: "card2",
        title: "تصميم داخلي",
        imgUrl: icon2,
        description:
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    },
    {
        id: "card3",
        title: "التصميم الخارجي",
        imgUrl: icon3,
        description:
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    },
];

const Banner = (props) => {
    const cardContent = props.dir === 'ltr' ? CARD_CONTENT : CARD_CONTENT_RTL;
    const title = props.dir === 'ltr' ? 'Arch Design Studio' : 'استوديو التصميم المعماري';
    const description = props.dir === 'ltr' ? 'A Very Personal Approach to Every Client' : 'نهج مخصص  لكل عميل';
    const span = props.dir === 'ltr' ? 'Solution to Complex Problems' : 'حل المشاكل المعقدة';
    const start = props.dir === 'ltr' ? 'Get started': 'ابدأ';
    return (
        <section className={props.dir === 'ltr' ? 'banner' : 'banner banner__rtl'}>
            <div className="banner__container">
                <div className="banner__desc">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <span>{span}</span>
                    <button type="button" className="btn">{start}</button>
                </div>
            </div>
            <div className="banner__card-list">
                {cardContent.map((card) => (
                    <BannerCard
                        key={card.id}
                        title={card.title}
                        imgUrl={card.imgUrl}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Banner;
