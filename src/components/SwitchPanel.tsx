import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import style from './SwitchPanel.module.css'

export default function SwitchPanel() {
  return (<form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className={style.Label} htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        Med1
      </label>
      <Switch.Root className={style.SwitchRoot} id="airplane-mode">
        <Switch.Thumb className={style.SwitchThumb} />
      </Switch.Root>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className={style.Label} htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        Med2
      </label>
      <Switch.Root className={style.SwitchRoot} id="airplane-mode">
        <Switch.Thumb className={style.SwitchThumb} />
      </Switch.Root>
    </div>
  </form>
);
}
