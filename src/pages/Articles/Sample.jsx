import styles from './Sample.module.scss';

export default function Sample () {
  return(
    <>
      <div className={styles['modal-back']}></div>
      <div className={styles['modal']}>
        <div className={styles['modal-head']}>
          <button>X</button>
        </div>
        <div className={styles['modal-content']}>
        </div>
      </div>
    </>
  );
}