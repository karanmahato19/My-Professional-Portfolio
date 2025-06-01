import axios from 'axios';
import React from 'react'
/**using useForm */
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';

function Contact() {
  /**confusing part try catch for the risky code while submiting data in the form */
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        };
        /**using axios & toast libraries */
        try {
          await axios.post("https://getform.io/f/bgdlljqa", userInfo);
          toast.success("Your message has been sent");
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong")
        }
    };
    
  return (
    <>
    <div id="contact"name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 mb-10">
        <h1 className="text-3xl font-bold mb-6 ">Contact Me</h1>
        <p className="text-lg md:text-xl">Please fill out the form below to contact me. </p>
        <div className="flex flex-col items-center justify-center mt-8">
            <form 
                 onSubmit={handleSubmit(onSubmit)} 
                //action="https://getform.io/f/apjmqpya" 
                //method="POST"
                className= "shadow-lg bg-slate-300 w-80 md:w-96 px-8 py-6 rounded-xl">
                <h1 className="text-xl text-center mt-5 mb-5">Send the message</h1>
                <div className="flex flex-col mb-5">
                    <label className="block">Full Name</label>
                    <input {...register("name", { required: true })} 
                    name="name" type="text" id="name" placeholder="Enter your full name"
                    className="shadow rounded-xl appearance-none border py-2 px-3
                     text-black leading-tight focus:out-of-range:" /> 
                     {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="flex flex-col mb-5">
                    <label className="block">E-mail</label>
                    <input {...register("email", { required: true })}
                    name="email" type="text" id="email" placeholder="Enter your e-mail address"
                    className="shadow rounded-xl appearance-none border py-2 px-3
                     text-black leading-tight focus:out-of-range:" /> 
                     {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="flex flex-col mb-5">
                    <label className="block">Write your message</label>
                    <textarea {...register("message", { required: true })}
                    name="message" type="textarea" id="message" placeholder="Write your message here..."
                    className="shadow rounded-xl appearance-none border py-2 px-3
                     text-black leading-tight focus:out-of-range:" />
                     {errors.message && <span className="text-red-500 text-sm">This field is required</span>} 
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-300">Send</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
