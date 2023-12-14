import './App.css';

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    // setIsOpen(!isOpen);
  };

  return (
    <div className="bg-primary flex flex-col h-screen w-screen">
      <div className='bg-secondary min-h-2/5 pb-6 w-full flex flex-col'>
        <nav className='--(nav) px-8 flex h-fit w-full justify-between'>
          <div className='flex'>
            <img src='/Logo.svg' alt='fimio' className='h-20'/>
            <div className='flex'>
              <img src='/User Bubble.svg' alt='user' className='mx-2'/>
              <a href='/' className='mx-2 my-auto' >{ `User` }</a>
            </div>
          </div>

          <div className="--(feedback) flex">
            <button className="navbar-toggle md:invisible" onClick={ toggleNavbar }>
              <img src='/hamburger-transparent.png' alt='menu' width={30} height={30}/>
            </button>
            <div className={`navbar-hide ${ true? 'hide' : '' } flex invisible md:visible`}>
              <button className="bg-primary h-fit w-fit border border-custom px-4 py-1 mx-2 my-auto rounded-md">Feedback</button>
              <a href="/help" className="mx-2 my-auto">Help</a>
            </div>
            <img src={`/User Bubble.svg`} alt="user" className='mx-2 my-auto' />              
          </div>
        </nav>

        <div className='my-auto mx-12 mt-12'>
          <h1 className='text-custom text-green-900 text-4xl font-bold'>You’re almost ready to run your workflow.</h1>
          <p>Please follow the steps below to configure your Workflow and run it.</p>
        </div>

        <div className='h-fit w-fit mx-12 mt-8 relative bg-primary p-3 px-28 rounded-2xl'>
          <img src='/github.svg' alt='github' className='absolute top-1/2 -translate-y-1/2 left-4' />
          <p>fimio-workflow</p>
        </div>
      </div>

      <div className='flex justify-start w-full'>
        <div className='flex flex-col w-1/5 mx-12'>
          <div className='mt-3 mb-6 flex'>
            <div className='relative w-4 flex justify-center'>
              <div className='w-1 h-full bg-gray-300 rounded-full'></div>
              <div className='w-3 h-3 bg-headers rounded-full absolute top-0 left-1/2 -translate-x-1/2'></div>
              <div className='w-3 h-3 bg-gray-300 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2'></div>
            </div>

            <div className='ps-4'>
              <p className='text-green-900 font-bold'>Configure</p>
              <p>Run</p>              
            </div>

          </div>
          <hr className='border border-custom'/>
          
          <div className='mt-3 mb-6'>
            <h3 className='font-bold'>GITHUB REPOSITORY</h3>
            <ul>
              <li className='flex'>
                <img src='/github.svg' alt='github' />
                <span className='ms-2'>
                  fimio-xyz/fimio-workflow
                </span>
              </li>
              <li className='flex'>
                <img src='/merge.svg' alt='main'/>
                <span className='ms-2'>
                  main
                </span>
              </li>
              <li className='flex'>
                <img src='/folder.svg' alt='main'/>
                <span className='ms-2'>
                  {'/'}
                </span>
              </li>              
            </ul>

          </div>

          <hr className='border border-custom'/>

          <div className='mt-3 mb-6'>
            Import a different repository
          </div>

        </div>
      </div>

      <div className='absolute w-7/12 h-3/5 bg-primary border-2 border-custom py-5 px-8 rounded-xl right-24 bottom-9'>
        <h2 className='text-2xl text-green-900 font-semibold mb-3'>Configure Workflow</h2>  
        <hr className='border border-custom'/>

        <form>
          <div className='group flex flex-col my-3'>
            <label htmlFor='project-name'>Project Name</label>
            <input type='text' name='project-name' placeholder='fimio-workflow' className='bg-secondary rounded-2xl py-3 px-5 placeholder:text-gray-600' />
          </div>

          <div className='group flex flex-col my-3'>
            <label htmlFor='entry-point'>Entry Point File</label>
            <input type='text' name='entry-point' placeholder='./' className='bg-secondary rounded-2xl py-3 px-5 placeholder:text-gray-600' />
          </div>

          <div className='group flex flex-col my-3'>
            <label htmlFor='project-name'>Data Sources (Optional)</label>
            <input type='text' name='project-name' placeholder='url' className='bg-secondary rounded-2xl py-3 px-5 placeholder:text-gray-600' />
          </div>

          <div className='w-full grid'>
            <button className='bg-headers w-fit text-white mx-auto py-2 px-16 rounded-lg'>Run Workflow</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
