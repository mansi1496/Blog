import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mansi.png"
          alt="Mansi"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Mansi</h1>
      <p>
        I blog about web development - especially front-end frameworks like
        Angular or React
      </p>
    </section>
  );
}

export default Hero;
