import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm} from '@inertiajs/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import backgroundImg from '../../../../public/images/loginpic.jpg';


export default function FormPropsTextFields() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!password ) {
            // 如果密码为空，就弹出警告框
            window.alert('请填写密码');
        }else if(!email){
            // 如果邮箱为空，就弹出警告框
            window.alert('请填写邮箱');  
        }else if (!validateEmail(email)) {
            // 如果邮箱格式不正确，就弹出警告框
            window.alert('请输入正确的邮箱格式');
        } else {
            // 如果表单验证通过，就可以执行登录操作
            console.log('登录成功');
            post(route('forum_register'));
        }
    }
    
    // const validateForm = () => {
    //     if (!email || !password) {
    //         // 如果邮箱或密码为空，就返回 false
    //         return false;
    //     }
    //     // 否则返回 true
    //     return true;
    // };

    const validateEmail = (email) => {
        // 使用正则表达式验证邮箱格式
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

            }}
            noValidate
            autoComplete="off"
        >
            <Head title="注册"></Head>
            <div><center><h1 style={{ fontSize: '2em' }}>登录</h1></center></div>
            <center>
                <div><TextField
                    required
                    id="email"
                    label="邮箱"
                    type="email"
                    variant="standard"
                    onChange={(event) => setEmail(event.target.value)}
                /></div>
                <div><TextField
                    required
                    id="password"
                    label="密码"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={(event) => setPassword(event.target.value)}
                /></div>
            </center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} direction="row">

                    <Button type='submit' variant="contained" onClick={handleSubmit} >登录</Button>
                    <Button variant="contained" color="success" >注册</Button>
                </Stack></div>
        </Box>

    );
}