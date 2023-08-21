import {useState, useEffect} from 'react'
import * as Progress from '@radix-ui/react-progress';
import style from './ProgressBar.module.css'
import { HeartFilledIcon, TimerIcon, BellIcon, Pencil2Icon, BookmarkFilledIcon } from '@radix-ui/react-icons';

export default function ProgressBar() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Health Summary - This Week</h1>

      <section>
      <HeartFilledIcon /> <p className={style.bartitle}>Fitness</p>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - 17}%)` }}
      />
    </Progress.Root>
    </section>
    <section>
    <TimerIcon /> <p className={style.bartitle}>Next medicine intake</p>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
    </section>
    <section>
    <BellIcon /> <p className={style.bartitle}>Next appointment</p>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - 50}%)` }}
      />
    </Progress.Root>
    </section>
      <section>
    <BookmarkFilledIcon /> <p className={style.bartitle}>Longest symptom duration</p>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - 70}%)` }}
      />
    </Progress.Root>
    </section>
    <section>
    <Pencil2Icon /> <p className={style.bartitle}>Consistent tracking</p>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - 40}%)` }}
      />
    </Progress.Root>
    </section>
    
    </div>
  );
};
