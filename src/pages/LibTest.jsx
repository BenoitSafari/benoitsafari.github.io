import { Button, SearchBar } from '@lib/Input';
import styles from './LibTest.module.scss';

function LibTest() {
  return(
    <div className={styles['lib-frame']}>
      <Button styles=''>Jambon</Button>
      <SearchBar
        name='search'
        placeholder='Jambon...'>
      </SearchBar>
    </div>
  );
}

export default LibTest;