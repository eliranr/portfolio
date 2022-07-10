import React, {useState} from 'react'
import { motion } from "framer-motion";
import { send } from 'emailjs-com';

export default function Contact({contact, setContact}) {
    const initialToSend = {
        from_name: '',
        message: '',
        from_email: '',
    }

    const [toSend, setToSend] = useState(initialToSend);
    const [isDis, setIsDis] = useState(false);
    const [messageSend, setMessageSend] = useState(false);

    

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsDis(true);
        send(
          'service_znxw5hc',
          'template_3sv09l9',
          toSend,
          'kScMCmu1JE_uMV8jp'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setMessageSend(true);
        })
        .catch((err) => {
            setIsDis(false);
            alert('Sorry, Somethibg went wrong..')
            console.log('FAILED...', err);
        });
    };
    
    if (!messageSend) {
        return (
            <motion.div
                id='contact'
                className='flex items-center justify-center h-[calc(100vh-86px)] min-h-[500px] mb-10'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 50
                }}
            >
                <div className='flex flex-col justify-between h-auto py-1  w-[80%] max-w-[600px]'>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-6 mb-6 lg:grid-cols-2">
                            <div>
                                <input
                                    disabled={isDis}
                                    value={toSend.from_name}
                                    name='from_name'
                                    onChange={handleChange} 
                                    type="text" id="first_name" 
                                    className="disabled:bg-indigo-200 bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
                            </div>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input
                                    disabled={isDis}
                                    value={toSend.from_email}
                                    name='from_email'
                                    onChange={handleChange} 
                                    type="email" id="input-group-1" 
                                    className="disabled:bg-indigo-200  bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required/>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <textarea 
                                disabled={isDis}
                                value={toSend.message}
                                name='message'
                                onChange={handleChange}
                                type="text" rows='8' id="company" 
                                className="disabled:bg-indigo-200 resize-none bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required />
                        </div>
                        <div className='flex space-x-7'>
                            <button onClick={() => setContact(!contact)} className='bg-blue-50 rounded-[15px] px-2 py-3 text-blue-600 border-blue-600 border font-bold w-full hover:bg-blue-600 hover:text-white'>
                                Go Back
                            </button>
                            <button disabled={isDis} type='submit' className='disabled:opacity-50 disabled:hover:brightness-100 bg-blue-600 rounded-[15px] px-2 py-3 text-white font-bold w-full hover:brightness-90'>
                                {isDis ? 'Sending...' : 'Send!'}
                            </button>
                        </div>
                    </form>
        
                </div>
              </motion.div>
          )
    } else {
        return (
            <motion.div
                id='contact'
                className='flex items-center justify-center h-[calc(100vh-86px)] min-h-[500px] mb-10'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 50
                }}
            >
                <div className='flex flex-col justify-center space-y-[90px] h-full py-1  w-[80%] max-w-[600px] text-center'>
                    <h1 className='text-[32px]'>Thanks for the post,<br/>we'll be in touch!</h1>
                    <div className='flex space-x-3 md:space-x-7'>
                        <button onClick={() => setContact(!contact)} 
                            className='disabled:opacity-50 disabled:hover:brightness-100 bg-blue-600 rounded-[15px] px-2 py-3 text-white font-bold w-full hover:brightness-90'
                        >
                            Go Back
                        </button>
                        <button onClick={() => {setToSend(initialToSend); setMessageSend(false); setIsDis(false);}} 
                            className='bg-blue-50 rounded-[15px] px-2 py-3 text-blue-600 border-blue-600 border font-bold w-full hover:bg-blue-600 hover:text-white'>
                            Send Again 
                        </button>
                    </div>

        
                </div>
            </motion.div>
        )
    }

}
