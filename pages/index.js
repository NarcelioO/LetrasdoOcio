import Container from './container'
import Header from "./header"
import Sumario from './sumario'
import Post from './posts'
import styles from '../styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


function Home(){
    return (       
        <>   
       
    <Head>
        
    <title>LetrasDoÓcio</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/favicon.png" />
    
    </Head>
    
  
             
            <Header/>
             <Container/>
               <Sumario/>
                
<<<<<<< HEAD
               <Link href="/maezelo">
                <a className={styles.link}><Post titulo="<----- Mãe Zelosa ----->"/></a>
                </Link>
=======
                
>>>>>>> c3df532c8c1c9aa80340d15ad560582b2374cb84
                <Link href="/minhaqueridafe">
                <a className={styles.link}><Post titulo="<----- Minha Querida Fé ----->"/></a>
                </Link>
                <a className={styles.link}><Post titulo="<----- ? ----->"/></a>
                <a className={styles.link}><Post titulo="<----- ? ----->"/></a>
              
        </>
       
    )

}
export default Home
