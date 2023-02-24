import { SlUser } from 'react-icons/sl'
import { AiOutlineMail } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import MyButton from '../../UIcomponents/MyButton/MyButton'
const ContactForm = () => {
   const [form] = Form.useForm()
   const onFinish = (values) => {}
   return (
      <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
         <Form.Item
            name="Name"
            rules={[
               {
                  required: true,
                  message: 'Please input your name!',
               },
            ]}>
            <Input
               prefix={<SlUser color="var(--text-color)" className="site-form-item-icon" />}
               placeholder="Name"
               style={{ padding: 10, backgroundColor: 'var(--background-color)' }}
            />
         </Form.Item>
         <Form.Item
            name="Email"
            rules={[
               {
                  required: true,
                  message: 'Please input your email!',
               },
            ]}>
            <Input
               prefix={<AiOutlineMail color="var(--text-color)" className="site-form-item-icon" />}
               type="password"
               placeholder="Email"
               style={{ padding: 10, backgroundColor: 'var(--background-color)' }}
            />
         </Form.Item>
         <Form.Item
            name="password"
            rules={[
               {
                  required: true,
                  message: 'Please input your project!',
               },
            ]}>
            <TextArea
               allowClear
               autoSize={{ minRows: 8, maxRows: 20 }}
               style={{ backgroundColor: 'var(--background-color)' }}
               type="Project"
               placeholder="Write about your project"
            />
         </Form.Item>
         <Form.Item shouldUpdate>
            {() => (
               <MyButton
                  type="primary"
                  htmltype="submit"
                  disabled={
                     !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                  style={{ fontSize: 20, padding: 0 }}>
                  Send <BiSend style={{ marginLeft: 5 }} />
               </MyButton>
            )}
         </Form.Item>
      </Form>
   )
}

export default ContactForm
