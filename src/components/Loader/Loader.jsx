import { ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader__container}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#1976d2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
