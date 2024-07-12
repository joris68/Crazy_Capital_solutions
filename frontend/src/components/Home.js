import { Location } from './Location';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home(){
    return (
        <div className="Home">
            <div className="Image-container-background">
                <div className='card-container'>
                <Location city={"New York"} />
                <Location city={"Tokyo"} />
                </div>
            </div>
        </div>
      );
}