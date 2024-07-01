import AnimateOnView from '@/components/AnimateOnView';
import React from 'react';
import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
    title: 'Thimo van Ewijk | Contact',
    description: 'Neem contact op met mij voor een project of een vraag.',
}

const Page = () => {
    return (
        <div className='pt-12 medium:py-14 large:pt-24 large:pb-10 max-w-8xl w-full mx-auto flex justify-center'>
            <div className='tracking-tight flex flex-col text-left medium:text-center px-5 medium:px-7.5'>
                <AnimateOnView>
                    <h1 className='text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Laten we samenwerken</h1>
                </AnimateOnView>
                <div className='flex flex-col max-w-[780px]'>
                    <AnimateOnView delay={0.10}>
                        <p className='mt-6 mb-24 text-secondary font-medium text-[17px]'>
                            Ik ben benieuwd naar jouw project en hoe ik kan helpen. Deel gerust je projectgegevens via het formulier hieronder. Voor e-mail, contacteer me op
                            <br /><a href='mailto:thimove@gmail.com' className="text-white hover:text-secondary_purple duration-500 ease-linear"> thimove@gmail.com</a>
                        </p>
                    </AnimateOnView>
                    <AnimateOnView delay={0.20}>
                        <ContactForm />
                    </AnimateOnView>
                </div>
            </div>
        </div>
    );
}

export default Page;
