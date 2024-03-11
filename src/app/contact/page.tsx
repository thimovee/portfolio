import React from 'react';

const Page = () => {
    return (
        <div className='py-12 medium:py-14 large:pt-24 large:pb-10 max-w-8xl w-full mx-auto flex justify-center'>
            <div className='tracking-tight flex flex-col text-left medium:text-center px-5 medium:px-7.5'>
                <h1 className='text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Laten we samenwerken</h1>
                <div className='flex flex-col max-w-[780px]'>
                    <p className='mt-6 mb-24 text-secondary font-medium text-[17px]'>
                        Ik ben benieuwd naar jouw project en hoe ik kan helpen. Deel gerust je projectgegevens via het formulier hieronder. Voor e-mail, contacteer me op
                        <br /><a href='mailto:thimove@gmail.com' className="text-white hover:text-secondary_purple duration-500 ease-linear"> thimove@gmail.com</a>
                    </p>
                    <form className='flex flex-col gap-3.5 w-full placeholder:text-[#e8e6e399]'>
                        <div className='grid grid-cols-2 gap-3.5'>
                            <input placeholder="Naam" className='focus:outline-none h-11 bg-[#101010] rounded-[14px] text-base py-3 px-5 text-left flex items-center' />
                            <input placeholder="Email" className='focus:outline-none h-11 bg-[#101010] rounded-[14px] text-base py-3 px-5 text-left flex items-center' />
                        </div>
                        <div>
                            <textarea placeholder="Vertel me meer over je project" className='min-h-44 h-44 bg-[#101010] rounded-[14px] w-full text-base py-3 px-5 text-left flex items-center' />
                        </div>
                        <button className='py-3 hover:opacity-80 duration-300 ease-linear bg-purple rounded-[14px] text-base font-semibold'>Verstuur</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
