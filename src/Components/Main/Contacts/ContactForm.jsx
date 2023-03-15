import { SlUser } from 'react-icons/sl'
import { AiOutlineMail } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import MyButton from '../../UIcomponents/MyButton/MyButton'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import s from './Contacts.module.css'

const ContactForm = () => {
   const form = useRef()
   const sendEmail = (e) => {
      e.preventDefault()
      emailjs.sendForm('service_luyejjj', 'template_hakwel8', form.current, 'da1XSSNDG4js2qQ23').then(
         (result) => {
            message.success('Message sent')
         },
         (error) => {
            message.success(error.text)
         }
      )
   }

   return (
      <form ref={form} onSubmit={sendEmail}>
         <div>
            <label className={s.label}>Name:</label>
            <Input
               prefix={<SlUser style={{ marginRight: 10 }} color="var(--text-color)" size={20} />}
               placeholder="Write your name"
               className={s.input}
               style={{ padding: 10, backgroundColor: 'var(--background-color)' }}
               type="text"
               name="user_name"
            />
         </div>
         <div>
            <label className={s.label}>Email:</label>
            <Input
               prefix={<AiOutlineMail style={{ marginRight: 10 }} color="var(--text-color)" size={22} />}
               placeholder="Write your email"
               className={s.input}
               style={{ padding: 10, backgroundColor: 'var(--background-color)' }}
               type="email"
               name="user_email"
            />
         </div>
         <div>
            <label className={s.label}>Message:</label>
            <TextArea
               allowClear
               autoSize={{ minRows: 8, maxRows: 20 }}
               className={s.textarea}
               name="message"
               placeholder="Write about your project"
            />
         </div>
         <div style={{ padding: '20px 0' }}>
            <MyButton type="submit" transparentbutton="true">
               Sent <BiSend style={{ marginLeft: 5 }} />
            </MyButton>
         </div>
      </form>
   )
}

export default ContactForm
