import Chat from '../../components/Chat'
import Menu from '../../components/Menu';
import HumanInput from '../../components/HumanInput';


function ChatBox() {

  return (
      <div className='w-screen h-screen flex flex-row m-auto bg-white dark:bg-zinc-900 '>
        <Menu />

          <div className='w-full h-full flex flex-col m-auto'>
            <div className='flex-1 overflow-hidden'>
              <div className='h-full p-4 pb-0'>
                <div className='w-full h-full  flex flex-col'>
                  <Chat />
                </div>
              </div>
            </div>
            <div className='w-full'>
              {/* <Templates /> */}
              <div className='p-4 flex flex-col gap-2 '>
                <HumanInput />
              </div>
            </div>
          </div>
      </div>
  )
}

export default ChatBox
