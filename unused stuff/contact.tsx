import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from '../src/components/subcomponents/contactform'

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
                <img src='./././images/bitcoin.png'
                id='btcimg'
                onClick={() => {navigator.clipboard.writeText('16Gsw7iHTFygVKpxxMJEM92chHVLoozjVJ')}}/>
                <img src='./././images/ethereum.png'
                id='ethimg'
                onClick={() => {navigator.clipboard.writeText('0x3e1c53d6f61559e97fdb46a83f95307bac8a11b7')}}/>
                <span 
                onClick={() => {navigator.clipboard.writeText('16Gsw7iHTFygVKpxxMJEM92chHVLoozjVJ')}}>
                    16Gsw7iHTFygVKpxxMJEM92chHVLoozjVJ
                </span>
                <span
                onClick={() => {navigator.clipboard.writeText(' 0x3e1c53d6f61559e97fdb46a83f95307bac8a11b7')}}>
                    0x3e1c53d6f61559e97fdb46a83f95307bac8a11b7
                </span>
            </div>
        </div>
    )
}

export default Contact;
