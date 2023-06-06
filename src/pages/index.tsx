import Layout from '@/components/layout'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className={'flex flex-col items-center justify-center min-h-screen mt-20'}>
        <h1
          className={
            'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white text-center mb-8 max-w-screen-md'
          }
        >
          Get Ready for Something Big: Coming Soon
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 sm:p-24'>
          <div className='rounded-lg bg-gray-200 border-gray-400 border-2 dark:bg-dark-gray drop-shadow-2xl hover:drop-shadow-lg max-w-screen-sm'>
            <div className='p-8'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white text-left mb-8 max-w-screen-md'>
                Trackit
              </h2>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 text-left max-w-screen-md dark:text-white-200'>
                Automatically track attendance for your Google Meet meetings and
                get detailed reports on who attended and how much.
              </p>
              <button
                className='button-large'
                aria-label='Try-Trackit'
                onClick={()=>window.open('https://trackit.zeabur.app', '_blank', 'noopener,noreferrer')}
              >
                Try Trackit
              </button>
            </div>
          </div>
          <div className='rounded-lg bg-gray-200 border-gray-400 border-2 dark:bg-dark-gray drop-shadow-2xl hover:drop-shadow-lg max-w-screen-sm'>
            <div className='p-8'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white text-left mb-8 max-w-screen-md'>
                Arjun
              </h2>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 text-left max-w-screen-md dark:text-white-200'>
                Manage your schedule from WhatsApp while chatting with Arjun.
                Use the full power of ChatGPT on WhatsApp.
              </p>
              <button
                className='button-large'
                onClick={()=>window.open('https://arjun.visualbrahma.tech', '_blank', 'noopener,noreferrer')}
              >
                Chat with Arjun
              </button>
            </div>
          </div>
          <div className='rounded-lg bg-gray-200 border-gray-400 border-2 dark:bg-dark-gray drop-shadow-2xl hover:drop-shadow-lg max-w-screen-sm'>
            <div className='p-8'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white text-left mb-8 max-w-screen-md'>
                DevBoard Community
              </h2>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 text-left max-w-screen-md dark:text-white-200'>
                DevBoard is a vibrant community of developers where you can
                connect, learn, and collaborate on innovative projects.
              </p>
              <button
                className='button-large'
                onClick={()=>window.open('https://devboard.visualbrahma.tech', '_blank', 'noopener,noreferrer')}
              >
                Join DevBoard
              </button>
            </div>
          </div>
          {/* <div className='rounded-lg bg-gray-200 border-gray-400 border-2 dark:bg-dark-gray drop-shadow-2xl hover:drop-shadow-lg max-w-screen-sm'>
            <div className='p-8'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white text-left mb-8 max-w-screen-md'>
                VisualAI
              </h2>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 text-left max-w-screen-md dark:text-white-200'>
                We are running an experiment to utilize the creative abilities of AI.
                Let&apos;s explore together the future of content creation with AI.
              </p>
              <button
                className='button-large'
                onClick={()=>window.open('https://www.youtube.com/@visualai', '_blank', 'noopener,noreferrer')}
              >
                Watch now
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default Home
