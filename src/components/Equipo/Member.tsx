import Image, { StaticImageData } from "next/image";
import Plans from "./Plans";
import Button from "./Button";
import s from "./styles/member.module.css";

const PLAN_DATA = [
    {
        title: "Paquete 1",
        description: "Una sesión",
        price: 40,
    },
    {
        title: "Paquete 2",
        description: "Dos sesiones",
        price: 78,
    },
    {
        title: "Paquete 3",
        description: "Tres sesiones",
        price: 117,
    },
    {
        title: "Paquete 4",
        description: "Cuatro sesiones",
        price: 155,
    },
];

function Member({
    memberName,
    memberDescription,
    memberPicture,
    social,
}: {
    memberName: string;
    memberDescription: string;
    memberPicture: StaticImageData;
    social: any;
}) {
    return (
        <article className={s.mainArticle}>
            <aside>
                <div className={s.infoContainer}>
                    <div>
                        <h2 className="font-title-header">{memberName}</h2>
                        <p>{memberDescription}</p>
                    </div>
                    <picture className={s.mobileImage}>
                        <Image
                            fill
                            src={memberPicture}
                            alt={memberName}
                            objectFit="cover"
                        />
                    </picture>
                </div>
                <footer>
                    <div className={s.socialContainer}>
                        <Button link="" />
                        <div className={s.redes}>
                            <a href="" target="_blank" rel="noreferrer">
                                <img src="/assets/icons/Whatsapp.svg" width={40} height={40} />
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                                <img src='/assets/icons/Telegram.svg' width={40} height={40} />
                            </a>
                        </div>
                    </div>
                    <div className={s.planContainer}>
                        {PLAN_DATA.map((plan, i) => (
                            <Plans
                                key={i}
                                title={plan.title}
                                description={plan.description}
                                price={plan.price}
                            />
                        ))}
                    </div>
                </footer>
            </aside>
            <picture className={s.profileImage}>
                <Image
                    fill
                    src={memberPicture}
                    alt={memberName}
                    objectFit="cover"
                />
            </picture>
        </article>
    );
}

export default Member;