import Member from "@/components/Equipo/Member";
import s from "../../styles/equipo/equipo.module.css";
import rebePicture from "../../../public/assets/team/rebe.webp";
import kiriaPicture from "../../../public/assets/team/kiria.webp";
import vivianaPicture from "../../../public/assets/team/viviana.webp";
import { REBE_CALENDAR } from "@/utils/social";

const MEMBER_DATA = [
    {
        memberName: "Rebeca Aguilar",
        memberDescription:
            "Psicóloga especializada en Trastornos de la Conducta Alimentaria (TCA), con un enfoque particular en la relación con el cuerpo y la imagen corporal. Mi pasión y dedicación se centran en ayudar a quienes luchan contra desórdenes alimenticios, depresión y ansiedad. Con años de experiencia en el campo, estoy comprometida a ofrecer un apoyo compasivo y efectivo para guiar a mis pacientes hacia la recuperación y el bienestar emocional.",
        memberPicture: rebePicture,
        social: {
            calendar: REBE_CALENDAR,
            whatsapp: "https://wa.me/50230496207",
        },
    },
    {
        memberName: "Tatiana Camposeco",
        memberDescription:
            "Psicóloga especializada en trabajar con adultos y adolescentes. Mi enfoque se centra en ayudar a individuos que enfrentan desafíos como depresión, ansiedad, dificultades en relaciones de pareja, así como aquellos que están atravesando procesos de duelo y necesitan apoyo en tanatología. Además, me apasiona explorar la relación que tenemos con nuestro cuerpo y la comida, ofreciendo un espacio seguro y comprensivo para abordar estas áreas de la vida.",
        memberPicture: vivianaPicture,
        social: {
            calendar: "https://confirmafy.com/rebecaaguilarcinc",
            whatsapp: "https://wa.me/50230496207",
        },
    },
    {
        memberName: "Kiria Aguilar",
        memberDescription:
            "Nutricionista certificada en Psico Nutrición. Mi enfoque se centra en proporcionar asesoramiento y apoyo nutricional personalizado a personas que viven con diabetes tipo 1 y tipo 2, así como aquellas que enfrentan desafíos como el síndrome de ovario poliquístico (SOP), resistencia a la insulina y trastornos alimenticios. Mi objetivo es ayudarte a desarrollar hábitos alimenticios saludables que se adapten a tus necesidades específicas y te permitan vivir una vida plena y equilibrada",
        memberPicture: kiriaPicture,
        social: {
            calendar: "https://confirmafy.com/rebecaaguilarcinc",
            whatsapp: "https://wa.me/50230496207",
        },
    },
];

function page() {
    return (
        <section className={s.mainSection}>
            <div className={`${s.storeHeader}`}>
                <div className="container">
                    <h1 className="font-title-header">Nuestro Equipo</h1>
                    <h3>
                        Nos encanta tenerte aquí: Transformamos tus niveles de
                        conciencia para sanar heridas.
                    </h3>
                </div>
            </div>
            <section className={`${s.membersContainer} container`}>
                {MEMBER_DATA.map((member, idx) => (
                    <Member
                        key={idx}
                        memberName={member.memberName}
                        memberDescription={member.memberDescription}
                        memberPicture={member.memberPicture}
                        social={member.social}
                    />
                ))}
            </section>
        </section>
    );
}

export default page;
