import '../_faq.scss'
import XmarkIcon from '../FaqImg/xmark.svg'
import PlusIcon from '../FaqImg/plus.svg'


import React,{useState} from 'react'
const dataCollection = [
    {
        title:"01",
        question: 'What are the best tips for finding budget-friendly travel accommodations?',
        answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
    },

    {
        title:"02",
        question: 'How can I find authentic local experiences when traveling?',
        answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
    },

    {
        title:"03",

        question: 'What should I pack for a long-term trip or backpacking adventure?',
        answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
    },

    {
        title:"04",

        question: 'What are some strategies for overcoming jet lag when traveling across time zones?',
        answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
    },

    {
        title:"05",

        question: 'What are the visa requirements for popular tourist destinations?',
        answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
    }
]

export default function AccordionSection() {
    const [accordion,setActiveAccordion]= useState(-1)
    function toggleAccordion(index){
        if(index === accordion){
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index)
    }
    return (
        <section>
            <div className="accordionContainer">
                <div className='accordionFaq' >

                    <div className='accordionContent' >
                        {dataCollection.map((item, index) => (
                            <div className='questionAnswerContent' key={index} onClick={()=> toggleAccordion(index)} >
                                <div className='accordionFaqHeading' >
                                   <div className='questionAndAnswear' >
                                   <p>{item.title}</p>
                                    <h3 className={accordion === index ? "active" : ""} >{item.question}</h3>
                                   </div>
                                    <div className='accordionPlusAndXmarkIconsContent' >
                                    {accordion === index? (<><img src={XmarkIcon} alt="" /></> ):( <><img src={PlusIcon} alt="" /></>)}

                                    </div>
                                </div>
                                <div className='accordionDescription' >
                                    <p className={accordion === index ? "active": "inactive"} >{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}