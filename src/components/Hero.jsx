
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () =>  (
   <>
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}  `}>
      <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]
        mb-2  '>
           <img src={discount} alt="discount" className='w-[32px] h-[32px] '/>
           <p className={`${styles.paragraph} ml-2`} >
                <span className='text-white'>20%</span> Desconto para {''}
              <span className='text-white'>1 Mês</span> de conta
           </p>          
        </div>
        <div className='flex flex-row 
        justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px]
          text-[52px] text-white ss:leading-[100px]
          leading-[75px]'>
            O Método de <br className='sm:block hidden'/> {''} 
            <span className='text-gradient'>Pagamento</span> {''} <br />
          </h1>  
          <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
          </div>
        </div>
        <h1 className='flex-1 poppins font-semibold ss:text-[72px] text-[52px] text-white
        ss:leading-[100px] leading-[75px] w-full '>
           da Próxima <span className='text-gradient'>Geração</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nosso time de especialistas usam uma métodologia
          para identificar os cartões de crédito com maior 
          probabilidade de atender ás suas necessidades. Nós 
          examinamos anualmente as taxas percentuais, taxas anuais.
        </p>
      </div>
      <div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 
        relative `}></div>
        <img src={robot} alt="faturamento" 
        className='w-[100%] h-[100%] relative z-[5]' />

        <div className='static z-[0] w-[40%] h-[35%] 
        top-0 pink__gradient '/>
        <div className='static z-[1] w-[80%] h-[80%] 
        rounded-full bottom-40 white__gradient '/>
        <div className='absolute z-[0] w-[50%] h-[50%] 
        right-20 bottom-20 blue__gradient  '/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted/>
      </div>

    </section>
   </>
  )


export default Hero