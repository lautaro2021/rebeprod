import Button from "@/components/Button";
import s from "@/styles/Home/Hero.module.css";
import { REBE_CALENDAR } from "@/utils/social";

export default function Hero() {
  return (
    <section className={s.HomeHeroSection}>
      <div className={`container ${s.HomeHeroContainer}`}>
        <div className={s.HomeHeroText}>
          <h1 className="font-title-header">Rebeca Aguilar</h1>
          <h3 className="font-subtitle">
            Coach de salud holística y psicóloga especializada en psico
            alimentación
          </h3>
          <Button link href={REBE_CALENDAR}>
            Agendar reunion
          </Button>
        </div>
        <div className={s.HomeHeroImgContainer}>
          <img src="/assets/img/rebephoto1.png" alt="rebe photo" />
        </div>
      </div>
    </section>
  );
}
