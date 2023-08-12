import {useState, useEffect} from 'react'
import * as Progress from '@radix-ui/react-progress';
import style from './ProgressBar.module.css'

export default function ProgressBar() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.container}>
      <h1>Health Summary</h1>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
    <Progress.Root className={style.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={style.ProgressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
    
    </div>
  );
};
