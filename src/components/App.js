import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Publications from './Publications';

const Works = () => <div>Works</div>

const App = () => (
    <BrowserRouter>
        <Menu />
        <div className='margin'>
            <Routes>
                <Route exact path='/' element={ <Users /> } />
                <Route exact path='/works' element={ <Works /> } />
                <Route exact path='/publications/:key' element={ <Publications /> } />
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;