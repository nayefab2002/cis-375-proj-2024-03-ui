export default function Footer() {
  return (
    <footer className='bg-gray-100 h-16'>
      <div className='h-full px-2'>
        <div className='flex items-center justify-center h-full gap-8 text-gray-400 text-xs'>
          <a
            href='https://hotel-manager-ui.vercel.app/'
            className='text-gray-400 text-xs no-underline'
          >
            &copy; {new Date().getFullYear()} Hotel Manager, LLC
          </a>
          |
          <a
            href='https://umdearborn.edu'
            className='text-gray-400 text-xs no-underline'
          >
            University of Michigan-Dearborn | CIS 375
          </a>
          |
          <a
            href='https://github.com/RyanAIIen/cis-375-proj-2024-03-api'
            className='text-gray-400 text-xs no-underline'
          >
            API Code
          </a>
          |
          <a
            href='https://github.com/RyanAIIen/cis-375-proj-2024-03-ui'
            className='text-gray-400 text-xs no-underline'
          >
            UI Code
          </a>
        </div>
      </div>
    </footer>
  );
}
