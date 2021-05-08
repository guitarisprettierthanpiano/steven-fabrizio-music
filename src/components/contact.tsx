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
                onClick={() => {navigator.clipboard.writeText('bc1qpjhyw76k9a7nstvl3zrn4rj3y3rm950vzzk9ms')}}>
                    bc1qpjhyw76k9a7nstvl3zrn4rj3y3rm950vzzk9ms
                </span>
                <span
                onClick={() => {navigator.clipboard.writeText(' 0x85b9C50051009935F743F18F54312E8EAd1a2d91')}}>
                    0x85b9C50051009935F743F18F54312E8EAd1a2d91
                </span>
            </div>
        </div>
    )
}

export default Contact;
