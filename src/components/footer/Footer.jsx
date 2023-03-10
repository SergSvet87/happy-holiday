import format from 'date-fns/format';

import { Container } from "../container/Container";

import styles from "./Footer.module.css";

const icons = [
  {
    _id: 1,
    name: "linkedin",
    href: "https://www.linkedin.com/in/serhii-svitlychnyi",
    path: "./img/social-icons/linkedin.svg",
    size: 24,
  },
  {
    _id: 2,
    name: "telegram",
    href: "https://t.me/Serg_svet",
    path: "./img/social-icons/telegram.svg",
    size: 28,
  },
  {
    _id: 3,
    name: "gmail",
    href: "mailto:svitlychnyi1905@gmail.com",
    path: "./img/social-icons/gmail.svg",
    size: 30,
  },
  {
    _id: 4,
    name: "github",
    href: "https://github.com/SergSvet87",
    path: "./img/social-icons/github.svg",
    size: 30,
  },
  {
    _id: 5,
    name: "viber",
    href: "viber://chat?number=%2B380976157541",
    path: "./img/social-icons/viber.svg",
    size: 30,
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <p>
              Design:
              <a
                href="https://t.me/mrsh"
                target="_blank"
                rel="noreferrer"
              >
                Anastasia Ilina
              </a>
            </p>
            <p>
              Developer:
              <a
                href="https://t.me/Serg_svet"
                target="_blank"
                rel="noreferrer"
              >
                Serhii Svitlychnyi
              </a>
            </p>
            <p>© HBCard, {format(new Date(), "yyyy")}</p>
          </div>

          <ul className={styles.social}>
            {icons.map((icon) => (
              <li
                className={styles.item}
                key={icon._id}
              >
                <a
                  className={styles.link}
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={icon.path}
                    alt={icon.name}
                    width={icon.size}
                    height={icon.size}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
