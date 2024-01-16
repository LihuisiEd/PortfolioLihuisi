'use client'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Loading() {
  return (
    <div className='h-screen flex justify-center items-center lg:items-start lg:mt-11'>
      <Player
        autoplay
        loop
        src="https://lottie.host/c732f926-c469-4731-98d5-56a5baac204a/umtJuNDPem.json"
        style={{ height: '40px', width: '40px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>
  )
}
export default Loading