import type { NextPage } from 'next'
import { Header } from '../components/header/header'
import styles from '../styles/Home.module.css'
import css1 from '../components/header/Header.module.css';
import css2 from '../components/title/Title.module.css';
import css3 from '../components/image/Image.module.css';
import css4 from '../components/body/Body.module.css';
import { Title } from '../components/title/title';
import { ImagePhoto } from '../components/image/image';
import { Body } from '../components/body/body';

const Home: NextPage = () => {
  return (
    <>
        <Header classStyle={css1.header} child={
          <>
              <Title classStyle={css2.title} text="Bem Vindos ao meu Portifólio"></Title>
              <ImagePhoto text='https://static.vecteezy.com/ti/fotos-gratis/p1/1256600-aguia-orgulhosa-foto.jpg' classStyle={css3.image}></ImagePhoto>
          </>
        }></Header>
        <Body classStyle={css4.body}></Body>
    </>

  )
}

export default Home
