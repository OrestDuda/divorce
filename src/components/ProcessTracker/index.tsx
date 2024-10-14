import { FC } from "react";
import styles from "@/components/ProcessTracker/ProcessTracker.module.css";

interface IProcessTracker {}

const tracker_data = [
  {
    title: "Консультація",
    status: true,
  },
  {
    title: "Підписання договору про правову допомогу та оплата послуг",
    status: false,
  },
  {
    title: "Ви надсилаєте нам необхідні документи",
    status: false,
  },
  {
    title:
      "Протягом 1 робочого дня після отримання документів ми подаємо до суду позовну заяву про розірвання шлюбу",
    status: false,
  },
  {
    title:
      "Ми контролюємо провадження в суді, беремо участь в судових засіданнях",
    status: false,
  },
  {
    title: "Ми отримуємо судове рішення і надсилаємо Вам",
    status: false,
  },
];

const ProcessTracker: FC<IProcessTracker> = ({}) => {
  return (
    <div className={styles.tracker_container}>
      <div className={styles.header}>Порядок співпраці:</div>
      <div className={styles.progress_bar} />
      <div className={styles.main}>
        {tracker_data.map((item, idx) => (
          <div className={styles.item_container}>
            <div
              className={`${styles.item} ${idx === 3 && styles.center} ${styles[`idx${idx + 1}`]}`}
              key={item.title}
            >
              <p className={styles.title}>{item.title}</p>
            </div>
            <div className={styles.progress_bar_wrapper}>
              <div
                className={`${styles.circle} ${item.status && styles.active}`}
              />
              {idx < tracker_data.length - 1 && <div className={styles.line} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTracker;
