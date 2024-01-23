import s from "@/styles/Footer/Footer.module.css";
import Link from "next/link";
import { TLinkNav, linksNav } from "../Navbar/linksNav";

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <section className={s.FooterSection}>
        <div className={`container ${s.FooterContainer}`}>
          <img className={s.FooterIMG} src="/assets/img/RebecaLogoFooter.png" />
          <div className={s.FooterDataContainer}>
            <div className={s.FooterLinks}>
              {linksNav?.map((obj: TLinkNav) => {
                return (
                  <Link key={obj.text} href={obj.url} className="font-text">
                    {obj.text}
                  </Link>
                );
              })}
            </div>
            <div className={s.FooterTextAndSM}>
              <p>Acompáñame para recibir consejos adicionales y orientación</p>
              <div className={s.FooterSocialMedia}>
                {socialsMedia?.map((scm) => {
                  return (
                    <a key={scm.linkURL} href={scm.linkURL} target="_blank">
                      <img src={scm.icon} alt={scm.icon} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`container ${s.FooterCopyright}`}>
        <p>
          Rebeca Aguilar {date.getFullYear()} - Powered by{" "}
          <a
            href="https://www.neuroexperience.com.ar/"
            rel="noreferrer"
            target="_blank"
          >
            <strong>NEURO STUDIO</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export const socialsMedia = [
  {
    icon: "assets/icons/iconTelegramFooter.svg",
    linkURL: "https://t.me/rebehealthcoaching",
  },
  {
    icon: "assets/icons/iconSpotifyFooter.svg",
    linkURL:
      "https://open.spotify.com/episode/232Ad8A7ON1MhhAEaVd3ty?si=cTp5vXY2R8mqMXwlMvVRJA",
  },
  {
    icon: "assets/icons/iconTikTokFooter.svg",
    linkURL: "https://vm.tiktok.com/ZM6ufNby1/",
  },
  {
    icon: "assets/icons/iconInstagramFooter.svg",
    linkURL:
      "https://www.instagram.com/reel/C1230aZPR7V/?igsh=YnZ3ZGQ4Njl4eGt6",
  },
];
