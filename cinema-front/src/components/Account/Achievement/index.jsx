import styles from './achievement.module.css'

const Achievement = ({title, description, progress, key}) => (
  <li className={styles.achievement}>
    {title}
  </li>
)

export default Achievement;
