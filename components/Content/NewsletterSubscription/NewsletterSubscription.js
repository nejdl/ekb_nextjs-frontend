import MailchimpSubscribe from "react-mailchimp-subscribe"

import Block from '../Block/Block';

const NewsletterSubscription = ({ content }) => {
    const mailchimpUrl = content.mailchimpUrl;
    // return no component if mailchimpUrl is undefined
    if(!mailchimpUrl){
        return null;
    }

    const subscriptionText = content.subscriptionText;

    return (
        <Block 
            content={mailchimpUrl} >
            <Block
                content={subscriptionText}>
                <p 
                    className='newsletterSubscriptionText'>
                    {subscriptionText}
                </p>
            </Block>
            <div className='newsletterSubscriptionForm'>
                <MailchimpSubscribe
                    url={mailchimpUrl}/>
            </div>
        </Block>
    )
} 

export default NewsletterSubscription;