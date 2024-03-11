import ComponentCard from "@/components/componentCard/componentCard";
import styles from "./category.module.css";
import SearchBar from "@/components/searchBar/searchBar";

const CategoryPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.title}>Our Collection Of Products</h3>
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.componentContainer}>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
        <div className={styles.component}>
          <ComponentCard />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage