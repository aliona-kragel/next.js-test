import Image from "next/image";
import styles from "./styles.module.scss"
import { headers } from "next/dist/client/components/headers";

const About = () => {
  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__info}>
        <h1>About</h1>
        <p className={styles.about__slogan}>Welcome to the Test Store, a collection of apparel and accessories designed for test task. </p>
      </div>
      <div className={styles.about__background}>
        <Image
          src={`/images/about-page.jpg`}
          alt={`about`}
          width={350}
          height={800}
          className={styles.about__background_img} />
      </div>
    </div>

  )
}

export default About;