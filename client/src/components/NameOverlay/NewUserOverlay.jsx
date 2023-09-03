import React from 'react';
import { FaTimes} from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation_llr3h7nf.json';
import animationDataInstagram from '../../assets/instagram.json';
import animationDataTelegram from '../../assets/telegramm.json';

const NewUserOverlay = ({ onClose }) => {
  const overlayContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const overlayContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '90%',
    textAlign: 'center',
    position: 'relative', // To contain the close button
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '-5px',
    right: '-2px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayContainerStyle}>
      <div style={overlayContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 style={{ marginBottom: '0.5rem', fontWeight:'400' }}>Developed by</h2>
        <h2 style={{ marginBottom: '0.5rem', fontWeight:'500' }}>Hisham Ahmed</h2>
        <p className='small-text' style={{color:'grey'}}>For web projects contact me on</p>
        <div className='links' style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <a style={{ textDecoration: 'none', marginRight: '5px', color:'#0A66C2', letterSpacing: "1px", fontSize:'1.2rem' }} href='https://www.linkedin.com/in/hishamahmedx'>Linkedin</a>
            <Lottie animationData={animationData} style={{ height: "30px", width: "30px", margin: "0" }} />
            </div>

        <div className='links' style={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
        <a style={{ textDecoration: 'none', marginRight: '5px', color:"#E02683", letterSpacing:"1px", fontSize:'1.2rem' }} href='www.instagram.com/hisham_ahmedx'>Instagram</a>
        <Lottie animationData={animationDataInstagram} style={{ height: "30px", width: "30px", margin: "0" }} />
        </div>

        <div className='links' style={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
        <a style={{ textDecoration: 'none', marginRight: '5px', color:'#1A94D7', letterSpacing:"1px", fontSize:'1.2rem' }} href='https://t.me/hisham_ahmedx'>Telegram</a>
        <Lottie animationData={animationDataTelegram} style={{ height: "30px", width: "30px", margin: "0"}} />
        </div>

         
      </div>
    </div>
  );
};

export default NewUserOverlay;

  