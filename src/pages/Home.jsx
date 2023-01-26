import { Container } from 'components/Container/Container'
import css from '../pages/Home.module.css';

export const Home = () => {
    return(
        <Container>
            <h1 className={css.title}>Your phonebook application</h1>
            <img className={css.img} src="http://4.bp.blogspot.com/-sOoKu0XM45M/U-Iv4wWFIBI/AAAAAAAAA7c/gvRxourZ0Ew/s1600/pb.png" width='500' alt="phonebook" />
            <p className={css.text}>Phonebook is extremaly helpfull and convenient in your daily experiences.</p>
        </Container>
    )
}