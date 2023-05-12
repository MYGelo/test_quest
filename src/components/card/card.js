import { Logo } from 'components/logo/logo';
import { Boy, Images } from 'index';
import css from './card.module.css';

export default function Card() {
  const tweets = 777;
  const followers = 100500;

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <Logo />
      </div>
      <Images />
      <div>
        <p className={css.line}></p>
        <span className={css.elipse}></span>
        <Boy />
      </div>
      <p className={css.tweets}>{tweets} TWEETS</p>
      <p className={css.followers}>{followers} FOLLOWERS</p>
      <button className={css.btn} type="button">
        FOLLOW
      </button>
    </div>
  );
}
