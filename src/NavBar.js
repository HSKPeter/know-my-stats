import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="px-5 py-3">            
                <Navbar.Brand href="#home"><i className="fab fa-youtube"></i> Know My Stats</Navbar.Brand>
        </Navbar>
    )
}