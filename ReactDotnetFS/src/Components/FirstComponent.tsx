import './FirstComponent.css';
import logo from '../assets/OIP.jpg';

type args= {
    subtitle:string
}
const FirstComponent = ({subtitle} : args) =>{
    return (
         
        <header className="row mb-4">
            <div className='col-2'>

                <img src={logo}
                className="logo"
                alt="logo"
                />
            </div>
            <div className='col-10 mt-5 subtitle'>{subtitle}</div>
        </header>
    );
}



export default FirstComponent;