import { Location } from './Location';
import { MainHeader } from './MainHeader';
import {HeaderBar} from './HeaderBar';
import './Location.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home(){
    return (
        <div className="Home">
            <header>
            <HeaderBar/>
            </header>
            <div className="Image-container-background">
                <MainHeader/>
                <div className='card-container'>
                <Location city={"New York"} />
                <Location city={"Tokyo"} />
                </div>
                <footer>
                </footer>
            </div>
        </div>
      );
}