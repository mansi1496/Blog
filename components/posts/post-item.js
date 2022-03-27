import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

export default function PostItem(props) {
  const { title, image, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(props.post);

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post} key={slug}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
