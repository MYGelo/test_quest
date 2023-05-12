import css from './card.module.css';

export default function Card() {
  const tweets = 777;
  const followers = 100500;

  return (
    <div className={css.container}>
      <svg></svg>
      <p className={css.tweets}>{tweets} TWEETS</p>
      <p className={css.followers}>{followers} FOLLOWERS</p>
      <button className={css.btn} type="button">
        FOLLOW
      </button>
    </div>
  );
}
