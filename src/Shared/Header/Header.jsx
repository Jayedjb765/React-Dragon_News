import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
          <img className='mx-auto' src={logo} alt="" />
          <div className='text-center'>
          <p className='text-lg'>Journalism Without Fear or Favour</p>
          <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
          </div>
            
        </div>
    );
};

export default Header;