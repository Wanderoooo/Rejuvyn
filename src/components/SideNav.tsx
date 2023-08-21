import { useAuthContext } from '@/firebase/context/AuthContext';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import {auth} from '../firebase/context/AuthContext'
import style from './SideNav.module.css'

export default function SideNav() {

    const {user} = useAuthContext()
    const router = useRouter()

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            router.push("/");
        }).catch((error) => {
          console.log(error)
        })
      }

    
    return (
  <DropdownMenu.Root>
    
    <DropdownMenu.Trigger>
        <button className={style.IconButton}>
            <HamburgerMenuIcon />
        </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
        <DropdownMenu.Content className={style.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={() => router.push('.')}>
            Home 
          </DropdownMenu.Item>
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={() => router.push(user ? './dashboard' : './login')}>
            Dashboard
          </DropdownMenu.Item>
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={() => router.push(user ? './dailyhealth' : './login')}> 
            Daily Health Check
          </DropdownMenu.Item>
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={() => router.push(user ? './medication' : './login')}>
            Medication
          </DropdownMenu.Item>
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={() => router.push(user ? './record' : './login')}>
            Record
          </DropdownMenu.Item>
          <DropdownMenu.Item className={style.DropdownMenuItem}>
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={style.DropdownMenuSeparator} />
          {user ? 
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={handleLogout}>
            Log Out
          </DropdownMenu.Item>
          :
          <DropdownMenu.Item className={style.DropdownMenuItem} onSelect={() => router.push('./login')}>
            Log In
          </DropdownMenu.Item>}
          </DropdownMenu.Content>
          </DropdownMenu.Portal>
  </DropdownMenu.Root>
)
    }