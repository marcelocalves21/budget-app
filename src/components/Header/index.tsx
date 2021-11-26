import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="budget-app" />
                <button type='button'>
                    New Entry
                </button>
            </Content>
        </Container>
    )
}