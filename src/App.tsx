import Chat from './components/Chat'
import Menu from './components/Menu';
import HumanInput from './components/HumanInput';


function App() {

  return (
    <>

      {/* <div className='flex  flex-row w-full bg-blue-100'>
          <div className=' p-6'>
            <input className='w-4/5 border h-10 p-4 text-gray-900 border-gray-300  rounded-full bg-white' type='text' placeholder='YouTube URL' />
          </div>
        </div> */}

      <div className='w-screen h-screen flex flex-row m-auto bg-gray-100 '>
        <Menu />
        <div className='w-full h-full flex flex-col'>
          <div className='flex-1 overflow-hidden'>
            <div className='h-full p-4 pb-0 '>
              <div className='w-full h-full bg-white p-4 flex flex-col gap-5 rounded-xl overflow-y-auto'>
                <Chat />
              </div>
            </div>
          </div>
          <div className='w-full'>
            {/* <Templates /> */}
            <div className='p-4 flex flex-col gap-2 '>
              <HumanInput />
              {/* <div className='w-full h-[120px]'>
                <div className='w-full'>
                  <textarea
                    value={input_contents}
                    onChange={e => {
                      setHumanInput(e.target.value)
                    }}
                    placeholder={getPlaceholderContents()}
                    className='w-full h-full border p-4  focus:border   focus:border-blue-800 rounded-xl'
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    onClick={sendHumanMessage}
                    className={clsx('px-5 py-1  text-white  rounded-lg', input_contents === "" ? "bg-slate-200" : "bg-sky-500")}
                    disabled={input_contents === ""}
                  >
                    Send
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
