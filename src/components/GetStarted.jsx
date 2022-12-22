
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () =>  (
   <>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
    bg-blue-gradient p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter} flex-col bg-zinc-900 w-[100%] h-[100%]
      rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium 
          text-[22px] leading-[33px] mr-2 '> 
            <span className='text-gradient'>Iniciar</span>
            </p>
          <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain ' />
        </div>
      </div>
    </div>

   </>
  )


export default GetStarted