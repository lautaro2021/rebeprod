import s from "./styles/plan.module.css";

function Plans({
    title,
    description,
    price,
}: {
    title: string;
    description: string;
    price: number;
}) {
    return (
        <div className={s.planContainer}>
            <h4>{title}</h4>
            <h6>{description}</h6>
            <h3>
                USD <strong>{price}</strong>
            </h3>
        </div>
    );
}

export default Plans;
