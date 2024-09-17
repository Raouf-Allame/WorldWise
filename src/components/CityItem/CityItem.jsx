
import styles from './CityItem.module.css'


const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date } = city;




  return (
    <li className={styles.cityItem}>
      <div>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
      </div>
      <div>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </div>
    </li>
  )
}

export default CityItem
