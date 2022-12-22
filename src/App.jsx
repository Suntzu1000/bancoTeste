
import styles from './style'
import { NavBar, Hero,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Stats,
  Testimonails, } from './components'

const App = () => 
   (<>
    <div className='bg-zinc-900 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>

      <div className={`bg-zinc-900 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>    
        <Hero/>
        </div>
      </div>

      <div className={`bg-zinc-900 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/> 
        <Testimonails/>
        <Clients/>
        <CTA/>
        <Footer/>
        </div>
      </div>
    </div>
   </>
  )


export default App