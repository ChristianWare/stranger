import styles from './Layout.module.css'

function Layout({ children }) {
    return (
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.layout}>
            {children}
          </div>
        </div>
      </div>
    );
}

export default Layout
