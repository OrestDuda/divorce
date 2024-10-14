import { FC } from "react";
import styles from "./TariffCard.module.css";
import Button from "../Button";

interface ITariffCard {
  tariff_name: string;
  subtitle: string;
  hint?: string;
  tariff_number: number;
  price: string;
}

const TariffCard: FC<ITariffCard> = ({
  tariff_name,
  subtitle,
  hint,
  tariff_number,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.title_container}>
          <div className={styles.card_number}>
            <p className={styles.tariff_number_text}>{tariff_number}</p>
          </div>
          <p className={styles.tariff_name}>{tariff_name}</p>
        </div>
        <div className={styles.subtitle_container}>
          <p className={styles.subtitle_text}>{subtitle}</p>
        </div>
      </div>

      <div className={styles.button_container}>
        {hint && <p className={styles.hint_text}>{hint}</p>}
        <Button text={price} type="transparent" text_color="black" />
      </div>
    </div>
  );
};

export default TariffCard;
