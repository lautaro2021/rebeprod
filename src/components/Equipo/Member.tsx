import Image, { StaticImageData } from "next/image";
import Plans from "./Plans";
import Button from "./Button";
import s from "./styles/member.module.css";

const PLAN_DATA = [
    {
        title: "Paquete 1",
        description: "Una sesión",
        price: 60,
    },
    {
        title: "Paquete 2",
        description: "Tres sesiones",
        price: 150,
    },
    {
        title: "Paquete 3",
        description: "Cuatro sesiones",
        price: 210,
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
                        <Button link={social.calendar} />
                        <div className={s.redes}>
                            <a href={social.whatsapp} target="_blank" rel="noreferrer">
                                <img src="/assets/icons/WhatsApp.svg" width={40} height={40} />
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
