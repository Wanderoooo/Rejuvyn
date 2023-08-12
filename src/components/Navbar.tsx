import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import style from './Navbar.module.css'
import Image from 'next/image';

export default function Navbar() { 
  return (
        <NavigationMenu.Root className={style.NavigationMenuRoot}>
          <NavigationMenu.List className={style.NavigationMenuList}>
          <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href='/'>
              <Image
                  src="/images.png"
                  width={29}
                  height={29}
                  alt="Picture landing page icon"
               />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href='./dashboard'>
                Dashboard
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href="./dailyhealth">
                Daily Health Check
              </NavigationMenu.Link>
            </NavigationMenu.Item>
    
            <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href="./medication">
                Medication
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href="./appointment">
                Appointment
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <div className={style.ViewportPosition}>
            <NavigationMenu.Viewport className={style.NavigationMenuViewport} />
          </div>

          <NavigationMenu.List className={style.NavigationMenuList}>
          <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href="/">
                Profile
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
      );
    };
    
    