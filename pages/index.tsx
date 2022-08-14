import type { NextPage } from 'next'
import { Header } from '../components/header/header'
import styles from '../styles/Home.module.css'
import css1 from '../components/header/Header.module.css';
import css2 from '../components/title/Title.module.css';
import css3 from '../components/image/Image.module.css';
import css4 from '../components/body/Body.module.css';
import css5 from '../components/skill/Skill.module.css';
import css6 from '../components/card/Card.module.css';
import { Title } from '../components/title/title';
import { ImagePhoto } from '../components/image/image';
import { Body } from '../components/body/body';
import Head from 'next/head';
import { Skill } from '../components/skill/skill';
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Card } from '../components/card/card';



const Home: NextPage = () => {
  return (
    <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&family=Special+Elite&display=swap" rel="stylesheet"/>

        </Head>
        <Header classStyle={css1.header} child={
            <>
              <Card classStyle={css6.git} href='https://github.com/olliso17' target='_blank' child={
                <BsGithub /> 
              }></Card>
              <Card classStyle={css6.linkedin} href='https://www.linkedin.com/in/patricia-silva-oliveira-/' target='_blank' child={
                <BsLinkedin/> 
              }></Card>
              <Card classStyle={css6.whatsapp} href='https://api.whatsapp.com/send?phone=5579996519451' target='_blank' child={
                <BsWhatsapp/>
              }></Card>
              
            </>   
        }></Header>
        <Body classStyle={css4.body} child={
          <>
              {/* <Title classStyle={css2.title} text="Bem Vindos ao meu Portifólio,"></Title> */}
              <Title classStyle={css2.title} text="Olá, me chamo Patrícia Silva Oliveira, sou web  developer"></Title>
              <Title classStyle={css2.description} text="Lorem ipsum dolor sit amet. In omnis impedit qui facilis voluptas 33 voluptas sequi qui omnis animi. Rem soluta error aut galisum maiores ut inventore vero.
                Ab nihil aliquid et voluptatem distinctio quo explicabo repellat nam minus ipsa et excepturi odio? Ut iusto omnis ab ducimus ullam non asperiores veritatis et iure ipsa. Sit asperiores dignissimos sed laudantium aperiam aut aliquam eius qui libero iure vel veniam similique ad harum galisum.
                Et debitis numquam aut sunt consequuntur est totam voluptates. Et excepturi ipsa vel ducimus necessitatibus hic laborum error est quia eius. Eos sint dolorem ea molestiae quos vel suscipit ratione ut distinctio obcaecati. Id repudiandae tempore et velit alias est nobis harum ut sint voluptatem?"></Title>

              <ImagePhoto text='https://static.vecteezy.com/ti/fotos-gratis/p1/1256600-aguia-orgulhosa-foto.jpg' classStyle={css3.image}></ImagePhoto>
          
          </>
        }></Body>
         <Body classStyle={css4.body} child={
          <>
              <Title classStyle={css2.title} text="Habilidades"></Title>
              <Skill classStyle={css5.skill} child={
                <>
                  
                </>
              }></Skill>
          
          </>
        }></Body>
    </>

  )
}

export default Home
