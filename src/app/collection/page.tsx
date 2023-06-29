import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.scss"

export type ICollectionItem = {
  name: string,
  img: string,
  desc: string,
  slogan: string,
  price: number,
  id: string
}

export const getCollection = async () => {
  const res = await fetch("http://localhost:5000/items")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = res.json();
  return data
}


const Collection = async () => {
  const collection: ICollectionItem[] = await getCollection();
  return (
    <div className={styles.collection__wrapper}>
      <h1>Collection</h1>
      <div className={styles.collection}>
        {collection.map((item) => {
          return (
            <>
              <Link href={`/collection/${item.id}`} key={item.id} className={styles.collection__item}>
                <div>
                  <Image
                    src={`/images/${item.img}`}
                    alt={`${item.name}`}
                    width={350}
                    height={500}
                    className={styles.collection__image} />
                </div>
                <div className={styles.collection__info}>
                  <h3>{item.name}</h3>
                  <p className={styles.collection__item_price}>${item.price}</p>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}


export default Collection;