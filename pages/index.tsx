import type { NextPage } from 'next'
import { Header } from '../components/header/header'
import styles from '../styles/Home.module.css'
import css1 from '../components/header/Header.module.css';
import css2 from '../components/title/Title.module.css';
import { Title } from '../components/title/title';

const Home: NextPage = () => {
  return (

    <Header classStyle={css1.header} child={
       <Title classStyle={css2.title} text="Bem Vindos ao meu Portifólio"></Title>
    }></Header>
  )
}

export default Home
