import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import style from './Navbar.module.css'
import Image from 'next/image';
import {auth} from '../firebase/context/AuthContext'
import {  signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useAuthContext } from '../firebase/context/AuthContext';
import Link from 'next/link';


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
              <Link className={style.NavigationMenuLink} href='/'>
              <Image
                  src="/logo.png"
                  width={29}
                  height={29}
                  alt="Picture landing page icon"
               />
              </Link>
            </NavigationMenu.Item>
          <NavigationMenu.Item>
              <Link className={style.NavigationMenuLink} href={user ? './dashboard' : './login'}>
                Dashboard
              </Link>
            </NavigationMenu.Item>
          <NavigationMenu.Item>
              <Link className={style.NavigationMenuLink} href={user ? './dailyhealth' : './login'}>
                Daily Health Check
              </Link>
            </NavigationMenu.Item>
    
            <NavigationMenu.Item>
              <Link className={style.NavigationMenuLink} href={user ? './medication' : './login'}>
                Medication
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link className={style.NavigationMenuLink} href={user ? './record' : './login'}>
                Record
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <div className={style.ViewportPosition}>
            <NavigationMenu.Viewport className={style.NavigationMenuViewport} />
          </div>

          <NavigationMenu.List className={style.NavigationMenuList}>
          <NavigationMenu.Item>
              <Link className={style.NavigationMenuLink} href={user ? './profile' : './login'}>
                Profile
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              {user ? 
            <button className={`${style.NavigationMenuLink} ${style.logout}`} onClick={handleLogout}>
                Log Out
            </button>
            :
            <button className={`${style.NavigationMenuLink} ${style.logout}`} onClick={() => router.push('./login')}>
                Log In
            </button>
}
            </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
      );
    };
    
    