import { PacmanLoader } from 'react-spinners'
import { Colors } from '../../global/styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={Colors.white} />
    </Container>
  )
}

export default Loader
