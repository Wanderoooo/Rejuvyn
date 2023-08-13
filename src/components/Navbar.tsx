import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import style from './Navbar.module.css'
import Image from 'next/image';
import {auth} from '../context/AuthContext'
import {  signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/AuthContext';


export default function Navbar() { 
  const router = useRouter()
  const {user} = useAuthContext()

 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            router.push("/");
            console.log("Signed out successfully")
        }).catch((error) => {
          console.log(error)
        })
      }

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
              <NavigationMenu.Link className={style.NavigationMenuLink} href={user ? './dashboard' : './signin'}>
                Dashboard
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href={user ? './dailyhealth' : './signin'}>
                Daily Health Check
              </NavigationMenu.Link>
            </NavigationMenu.Item>
    
            <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href={user ? './medication' : './signin'}>
                Medication
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href={user ? './appointment' : './signin'}>
                Appointment
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <div className={style.ViewportPosition}>
            <NavigationMenu.Viewport className={style.NavigationMenuViewport} />
          </div>

          <NavigationMenu.List className={style.NavigationMenuList}>
          <NavigationMenu.Item>
              <NavigationMenu.Link className={style.NavigationMenuLink} href={user ? './profile' : './signin'}>
                Profile
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              {user ? 
            <button className={`${style.NavigationMenuLink} ${style.logout}`} onClick={handleLogout}>
                Log Out
            </button>
            :
            <button className={`${style.NavigationMenuLink} ${style.logout}`} onClick={() => router.push('./signin')}>
                Log In
            </button>
}
            </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
      );
    };
    
    