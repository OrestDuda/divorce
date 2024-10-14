import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
import { Link } from "react-scroll";
import TelegramSvg from "@/assets/svg/SocialPlatform/TelegramSvg";
import FacebookSvg from "@/assets/svg/SocialPlatform/FacebookSvg";
import divorce_lawyers from "@/assets/divorce_lawyers.png";
import quick_divorce_lawyers from "@/assets/quick_divorce_lawyers.png";
import process_tracker from "@/assets/process_tracker.png";
import ProcessTracker from "@/components/ProcessTracker";
import founder_picture from "@/assets/founder.png";
import founder_and_partners from "@/assets/founder_and_partners.png";
import partner_woman from "@/assets/partner_woman.png";
import TariffCard from "@/components/TariffCard";
import QuestionDropdown from "@/components/QuestionDropdown";
import contact_us from "@/assets/contact_us.png";
import CustomInputs from "@/components/CustomInputs.tsx";
import { useState } from "react";

const menu = [
  {
    text: "Процес",
    link: "process_section",
  },
  {
    text: "Про нас",
    link: "about_us_section",
  },
  {
    text: "Тарифи",
    link: "tariff_section",
  },
  {
    text: "Запитання-відповіді",
    link: "questions_section",
  },
];
const tariff_card = [
  {
    id: 1,
    tariff_name: "«Позовна заява»",
    price: "4000 грн.",
    subtitle:
      "Ми пишемо позовну заяву з урахуванням Ваших обставин та направляємо її Вам. У такому разі Вам прийдеться самостійно подати цю позовну до суду, брати участь в судових засіданнях.",
  },
  {
    id: 2,
    tariff_name: "«Все включено»",
    price: "8000 грн.",
    subtitle:
      "Ми пишемо та подаємо позовну заяву. Беремо участь в процесі розлучення від Вашого імені, отримуємо судове рішення. Вам тільки потрібно надати нам необхідні документи.",
    hint: "У вартість входить сплата судового збору.",
  },
  {
    id: 3,
    tariff_name: "«За кордоном»",
    price: "10 000 грн.",
    subtitle:
      "Ми отримуємо витяг з ДРАЦС, пишемо та подаємо позовну заяву. Беремо участь в процесі розлучення від Вашого імені, отримуємо судове рішення. Вам тільки потрібно надати нам необхідні документи.",
    hint: "У вартість входить сплата судового збору.",
  },
];
const questions_and_answers = [
  {
    id: 1,
    question: "Скільки часу займає процес розлучення?",
    answer:
      "Це залежить від завантаженості суду та судді, від бажання розлучатися другого з подружжя та інших факторів. Ми зі свого боку робимо все, щоб пришвидшити цей процес і в якомога коротші терміни отримати рішення суду.",
  },
  {
    id: 2,
    question: "Чи призначає суд аліменти при розірванні шлюбу?",
    answer:
      "Ні, батьки можуть самі домовитись про виплати на дитину. Однак, якщо такої домовленості неможливо дійти, той з батьків, з ким проживає дитина має право звернутися до суду з позовною заявою про стягнення аліментів.",
  },
  {
    id: 3,
    question:
      "Чи визначає суд з ким буде проживати дитина/діти після розлучення?",
    answer:
      "Ні, для цього потрібно подавати позовну заяву про визначення місця проживання дитини та залучати до цього процесу орган опіки та піклування?",
  },
  {
    id: 4,
    question: "Чи ділиться майно автоматично під час розірвання шлюбу?",
    answer:
      "Ні, Ви можете домовитись про поділ самостійно або звернутись до суду з окремим позовом про поділ майна подружжя.",
  },
  {
    id: 5,
    question: "Чи суд розірве шлюб якщо другий з подружжя цього не бажає?",
    answer:
      "Для розлучення потрібна воля лише одного з подружжя. У найгіршому випадку суд може надати строк для примирення (до 6 місяців). Проте, якщо аргументовано заперечувати проти надання такого строку (це вже наша робота) – суд його не надасть.",
  },
];

export default function Home() {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!clientName || !clientPhone) {
      setErrorMsg("Заповніть всі поля");
      return;
    }
    const response = await fetch("/api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientName, clientPhone }),
    });

    const data = await response.json();
    if (data.message) {
      setClientName("");
      setClientPhone("");
      setErrorMsg("");
    }
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.section} ${styles.padding_16}`}>
        <div className={styles.header_container}>
          <section className={styles.menu}>
            <div className={styles.menu_items}>
              {menu.map((item) => (
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <p className={styles.menu_item}>{item.text}</p>
                </Link>
              ))}
            </div>
            <div className={styles.header_button}>
              <Link
                to={"request_a_consultation"}
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                <Button text={"Замовити"} width="180px" />
              </Link>
            </div>
          </section>

          <section className={styles.header_info}>
            <p className={styles.header_info_text}>
              Адвокати для
              <br />
              швидкого розлучення
            </p>
            <div className={styles.header_social}>
              <div className={styles.header_social_platforms}>
                <a
                  className={styles.social_platform_container}
                  href="https://t.me/+380971866221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramSvg />
                </a>
                <a
                  className={styles.social_platform_container}
                  href="https://www.facebook.com/advokat.melnyk.andriy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookSvg />
                </a>
              </div>
              <div className={styles.clients_feedback}>
                <div className={styles.clients_feedback_image}>
                  <Image
                    src={divorce_lawyers}
                    alt={"divorce_lawyers"}
                    width={128}
                    height={56}
                  />
                </div>
                <div className={styles.clients_feedback_info}>
                  <p className={styles.clients_feedback_count}>1000+</p>
                  <p className={styles.clients_feedback_text}>
                    Задоволених клієнтів
                  </p>
                </div>
              </div>
            </div>
            <Link
              to={"request_a_consultation"}
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <Button
                text="Замовити консультацію"
                width="100%"
                max_width="510px"
                type="green"
              />
            </Link>
          </section>
        </div>
      </header>

      <main>
        <section
          id="process_section"
          className={`${styles.section} ${styles.padding_120}`}
        >
          <div className={styles.process_container}>
            <p className={styles.section_title}>Процес</p>

            <div className={styles.process_info}>
              <p className={styles.process_text}>
                Процес розлучення у співпраці з нами стане для Вас{" "}
                <span className={styles.process_text_green}>
                  швидким та безболісним
                </span>
                , ми докладемо усіх зусиль, щоб Ви не були у нього залученими і
                отримали вже готове судове рішення.
              </p>
              <div className={styles.process_bar_wrapper}>
                {/* TODO: if need dinamyc tracker */}
                {/* <ProcessTracker /> */}
                <Image
                  style={{
                    objectFit: "contain",
                    maxWidth: "1000px",
                    maxHeight: "700px",
                  }}
                  src={process_tracker}
                  alt={"process_tracker"}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about_us_section"
          className={`${styles.section} ${styles.padding_120} ${styles.grey_section}`}
        >
          <div className={styles.about_container}>
            <p className={styles.section_title}>Про нас</p>
            <div className={styles.about_wrapper}>
              <div className={styles.about_info_container}>
                <p className={styles.about_title}>
                  Адвокатське бюро «Андрій Мельник і партнери»
                </p>
                <p className={styles.about_subtitle}>
                  Андрій Мельник засновник бюро з досвідом роботи 10 років. У
                  своїй адвокатській практиції спецілізується на сімейних
                  справах. Кандидат юридичних наук, доцент кафедри цивільного
                  права та процесу ЛНУ ім. Івана Франка.Наше бюро має
                  багаторічний досвід роботи з сімейними справами. Ми знаємо усі
                  нюанси цих справ, тому у співпраці з нами Ви повністю захищені
                  та отримаєте бажаний результат у найкоротші терміни. Ми
                  працюємо по всій України.
                </p>
              </div>
              <div className={styles.about_count_container}>
                <div className={styles.border_right}>
                  <p className={styles.about_count}>10</p>
                  <p className={styles.about_text}>Років досвіду</p>
                </div>
                <div className={styles.border_right}>
                  <p className={styles.about_count}>500+</p>
                  <p className={styles.about_text}>Проведених справ</p>
                </div>
                <div>
                  <p className={styles.about_count}>1000+</p>
                  <p className={styles.about_text}>Задоволених клієнтів</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about_image}>
            <div className={styles.about_image_wrapper}>
              <Image
                style={{ height: "100%", width: "100%" }}
                src={founder_picture}
                alt={"process_tracker"}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={styles.about_image_wrapper}>
              <Image
                style={{ height: "100%", width: "100%" }}
                src={founder_and_partners}
                alt={"process_tracker"}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={`${styles.about_image_wrapper} ${styles.no_right_margin}`}>
            <Image
                style={{ height: "100%", width: "100%" }}
                src={partner_woman}
                alt={"process_tracker"}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section
          id="tariff_section"
          className={`${styles.section} ${styles.padding_120}`}
        >
          <div className={styles.tariff_container}>
            <div className={styles.section_title}>Тарифи</div>

            <div className={styles.tariff_cards}>
              {tariff_card.map((item, idx) => (
                <TariffCard
                  key={item.id}
                  tariff_name={item.tariff_name}
                  subtitle={item.subtitle}
                  hint={item.hint}
                  tariff_number={idx + 1}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className={styles.additional_services}>
            <p className={styles.additional_services_text}>Додаткові послуги</p>
            <div className={styles.additional_services_container}>
              <p className={styles.additional_services_description}>
                Ми також займаємось справами про стягнення аліментів, визначення
                місця проживання дитини, поділ майна подружжя, позбавлення
                батьківських прав.
              </p>
              <p className={styles.additional_services_price_description}>
                Вартість послуг у цих справах уточнюйте окремо.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.founder_pic_container} ${styles.padding_16}`}
        >
          <div className={styles.founder_pic}>
            <Image
              src={quick_divorce_lawyers}
              alt={"quick_divorce_lawyers"}
              layout="responsive"
              width={2816}
              height={1040}
            />
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.padding_120}`}
          id="questions_section"
        >
          <div className={styles.questions_answers}>
            <div className={styles.section_title}>Запитання-відповіді</div>
            <div className={styles.questions_answers_container}>
              {questions_and_answers.map((item, idx) => (
                <QuestionDropdown
                  question={item.question}
                  answer={item.answer}
                  key={item.id}
                  idx={idx + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="request_a_consultation"
          className={`${styles.section} ${styles.padding_120} ${styles.grey_section}`}
        >
          <div className={styles.order_a_call}>
            <div className={styles.order_a_call_container}>
              <div className={styles.order_a_call_form}>
                <div className={styles.section_title}>Замовити дзвінок</div>
                <div className={styles.order_a_call_description}>
                  Заповніть форму, і ми зв’яжемося з вами протягом 24 годин для
                  безкоштовної консультації.
                </div>
                <CustomInputs
                  clientName={clientName}
                  setClientName={setClientName}
                  clientPhone={clientPhone}
                  setClientPhone={setClientPhone}
                />
                <div
                  className={styles.order_a_call_button_container}
                  onClick={handleSubmit}
                >
                  {errorMsg && (
                    <p className={styles.error_message}>{errorMsg}</p>
                  )}
                  <Button
                    text={"Замовити консультацію"}
                    type="green"
                    max_width="384px"
                    width="100%"
                  />
                </div>
              </div>
              <div className={styles.contact_us_image_wrapper}>
                <Image
                  style={{ height: "auto", width: "100%" }}
                  src={contact_us}
                  alt={"contact_us"}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <div className={styles.footer_menu}>
            {menu.map((item) => (
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                <p className={styles.footer_item}>{item.text}</p>
              </Link>
            ))}
          </div>
          <div className={styles.footer_copyright}>
            <div className={styles.footer_social_platforms}>
              <a
                className={styles.social_platform_container}
                href="https://t.me/+380971866221"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramSvg />
              </a>
              <a
                className={styles.social_platform_container}
                href="https://www.facebook.com/advokat.melnyk.andriy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookSvg />
              </a>
              <div className={styles.footer_contacts}>
                <p className={styles.footer_contact_info}>+380971866221</p>
                <p className={styles.footer_contact_info}>
                  advokat.andriy.melnyk@gmail.com
                </p>
                <p className={styles.footer_contact_info}>
                  м. Львів, вул. Котляревського, 43
                </p>
              </div>
            </div>

            <div className={styles.footer_copyright_wrapper}>
              <p className={styles.footer_copyright_text}>
                Пoлітика конфеденційності
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
