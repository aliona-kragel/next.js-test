import styles from "./styles.module.scss"
import { ICollectionItem } from "../page";
import Image from "next/image";

export async function generateStaticParams() {
  const posts: ICollectionItem[] = await fetch(`http://localhost:5000/items`)
    .then((res) => res.json())

  return posts.map((item) => ({
    id: item.id,
  }))
}

const Details = async ({ params }: { params: { id: string } }) => {
  const collectionItem: ICollectionItem = await fetch(`http://localhost:5000/items/${params.id}`)
    .then((res) => res.json())
  return (
    <div className={styles.details}>
      <div>
        <Image
          src={`/images/${collectionItem.img}`}
          alt={`${collectionItem.name}`}
          width={400}
          height={550}
          className={styles.details__image} />
      </div>
      <div className={styles.details__info}>
        <p className={styles.details__price}>${collectionItem.price}</p>
        <h1>{collectionItem.name}</h1>
        <p className={styles.details__slogan}>{collectionItem.slogan}</p>
        <p className={styles.details__desc}> {collectionItem.desc}</p>
      </div>

    </div>
  )
}


export default Details;