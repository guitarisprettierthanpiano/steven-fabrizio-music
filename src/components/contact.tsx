import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from './subcomponents/contactform'

const Contact: React.FC = () => {

    return(
        <div id='contact-container'>
            <h1>Contact</h1>
            <p className='contact-desc'>This is a contact form. You can say anything you like. About my playing, if you have song recommendations or even about this website. You can use any valid e-mail address below to be anonymous. I personally have used noob@aol.com since I was a kid. That guy probably hates me.
            </p>
            <ContactForm />
            <div className='crypto'>
                <p>
                    You can donate BTC or ETH.
                </p>
                <p>
                    Click an address to copy it.<br/><br/>    
                </p>
                <img src='../images/bitcoin.png'
                id='btcimg'
                onClick={() => {navigator.clipboard.writeText('3GyCuSGvW9vRxRXuWt4Q3g2aaQDEm8UD3X')}}/>
                <img src='../images/ethereum.png'
                id='ethimg'
                onClick={() => {navigator.clipboard.writeText('0x7589f9D4d028D130AAB826b60ed01cFe41cA9b4D')}}/>
                <span 
                onClick={() => {navigator.clipboard.writeText('3GyCuSGvW9vRxRXuWt4Q3g2aaQDEm8UD3X')}}>
                    3GyCuSGvW9vRxRXuWt4Q3g2aaQDEm8UD3X
                </span>
                <span
                onClick={() => {navigator.clipboard.writeText('0x7589f9D4d028D130AAB826b60ed01cFe41cA9b4D')}}>
                    0x7589f9D4d028D130AAB826b60ed01cFe41cA9b4D
                </span>
            </div>
        </div>
    )
}

export default Contact;
