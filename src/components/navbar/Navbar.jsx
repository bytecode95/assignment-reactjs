import {Container, Navbar as NavbarBS} from 'react-bootstrap'




export default function Navbar(){

    
    return(
        <NavbarBS sticky='top' className='bg-white shadow-sm mb-4 border-b-gray-300 p-3'>
            <Container>
                <span className='font-bold text-2xl mx-auto'>STOREMATE</span>
            </Container>
        </NavbarBS>
    )
}