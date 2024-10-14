import { FC } from "react";
import styles from "./CustomInputs.module.css";
interface IindexProps {
  clientName: string;
  clientPhone: string;
  setClientName: (name: string) => void;
  setClientPhone: (phone: string) => void;
}

const CustomInputs: FC<IindexProps> = ({
  setClientName,
  setClientPhone,
  clientName,
  clientPhone,
}) => {
  const numberPattern = /^\d*$/;
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputField}>
        <label className={styles.label} htmlFor="name">
          Ваше ім'я
        </label>
        <input
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className={styles.nameInput}
          type="text"
          id="name"
          name="name"
          placeholder="Введіть ваше ім'я"
        />
      </div>

      <div className={styles.inputField}>
        <label className={styles.label} htmlFor="phone">
          Номер телефону
        </label>
        <div className={styles.phoneContainer}>
          <span className={styles.countryCode}>+380</span>
          <input
            value={clientPhone}
            onChange={(e) =>
              setClientPhone(
                numberPattern.test(e.target.value)
                  ? e.target.value
                  : clientPhone,
              )
            }
            className={`${styles.input} ${styles.disable_border}`}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Номер телефону"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomInputs;
