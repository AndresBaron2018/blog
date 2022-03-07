import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';

const Works = () => <div>Works</div>

const App = () => (
    <BrowserRouter>
        <Menu />
        <div className='margin'>
            <Routes>
                <Route exact path='/' element={ <Users /> } />
                <Route exact path='/works' element={ <Works /> } />
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;