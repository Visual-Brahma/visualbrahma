import Layout from '@/components/layout'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className={'flex flex-col items-center justify-center min-h-screen'}>
        <h1
          className={
            'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white text-center mb-8 max-w-screen-md'
          }
        >
          Get Ready for Something Big: Coming Soon
        </h1>

        <div className='flex flex-col sm:flex-row justify-between space-y-4 items-center sm:space-x-4 sm:space-y-0 mt-12 p-4'>
          <div className='rounded-lg bg-gray-200 border-gray-400 border-2 dark:bg-dark-gray drop-shadow-2xl hover:drop-shadow-lg max-w-screen-sm'>
            <div className='p-8'>
              <h5 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white text-left mb-8 max-w-screen-md'>
                Trackit
              </h5>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 text-left max-w-screen-md dark:text-white-200'>
                Automatically track attendance for your Google Meet meetings and
                get detailed reports on who attended and how much.
              </p>
              <a
                className='button-large'
                href='https://trackit.zeabur.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                Try Trackit
              </a>
            </div>
          </div>
          <div className='rounded-lg bg-gray-200 border-gray-400 border-2 dark:bg-dark-gray drop-shadow-2xl hover:drop-shadow-lg max-w-screen-sm'>
            <div className='p-8'>
              <h5 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white text-left mb-8 max-w-screen-md'>
                Arjun
              </h5>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 text-left max-w-screen-md dark:text-white-200'>
                Manage your schedule from WhatsApp while chatting with Arjun.
                Use the full power of ChatGPT on WhatsApp.
              </p>
              <a
                className='button-large'
                href='https://arjun.visualbrahma.tech'
                target='_blank'
                rel='noopener noreferrer'
              >
                Chat with Arjun
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
