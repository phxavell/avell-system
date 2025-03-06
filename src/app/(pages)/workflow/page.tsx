// src/app/(pages)/workflow/page.tsx
'use client'; // Marca este componente como um Client Component
import styles from './Workflow.module.css';

export default function Workflow() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Workflow - Montagem</h1>
      <div className={styles.tablesContainer}>
        {/* Mesa 1 */}
        <div className={styles.table}>
          <div className={styles.tableLabel}>Mesa 1</div>
          <div className={styles.tableTop}></div> {/* Topo da mesa */}
          <div className={styles.people}>
            {/* Pessoas do lado esquerdo */}
            <div className={styles.personLeft}>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
            </div>
            {/* Pessoas do lado direito */}
            <div className={styles.personRight}>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mesa Central - Montagem */}
        <div className={styles.centralTable}>
          <div className={styles.tableLabel}>Montagem</div>
          <div className={styles.tableTop}></div> {/* Topo da mesa */}
          <div className={styles.people}>
            {/* Pessoas do lado esquerdo */}
            <div className={styles.personLeft}>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
            </div>
            {/* Pessoas do lado direito */}
            <div className={styles.personRight}>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mesa 2 */}
        <div className={styles.table}>
          <div className={styles.tableLabel}>Mesa 2</div>
          <div className={styles.tableTop}></div> {/* Topo da mesa */}
          <div className={styles.people}>
            {/* Pessoas do lado esquerdo */}
            <div className={styles.personLeft}>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
            </div>
            {/* Pessoas do lado direito */}
            <div className={styles.personRight}>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
              <div className={styles.person}>
                <div className={styles.head}></div>
                <div className={styles.shoulders}></div>
                <div className={styles.arms}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}   