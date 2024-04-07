'use client';
import { AccessAlarm, ThreeDRotation,AccountCircle, Dashboard, Paid, EventAvailable,Inventory } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
    { name: 'Dashboard', href: '/Dashboard', icon: Dashboard },
    {
        name: 'Reservation',
        href: '/Dashboard/Reservation',
        icon: EventAvailable,
    },
    { name: 'Billing', href: '/Dashboard/Billing', icon: Paid },
    { name: 'Inventory', href: '/Dashboard/Inventory', icon: Inventory },
    { name: 'Account', href: '/Dashboard/Account', icon: AccountCircle },
]

export default function NavigationLinks() {
    const pathName = usePathname();
    return (
        <>
            {
                navLinks.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link href={link.href} key={link.name} className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-200 text-blue-500": pathName == link.href
                            }
                        )}>
                            <LinkIcon className='w-6' />
                            <p className='hidden md:block'>{link.name}</p>


                        </Link>
                    );
                })}
        </>

    );
}