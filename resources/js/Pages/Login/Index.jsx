import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function FormPropsTextFields() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!password || !email) {
            // 如果密码为空，就弹出警告框
            window.alert('表单填写不完整');
        } else if (!validateEmail(email)) {
            // 如果邮箱格式不正确，就弹出警告框
            window.alert('邮箱格式不正确');
        } else {
            // 如果表单验证通过，就可以执行登录操作
            console.log('登录成功');
        }
    }
    
    const validateForm = () => {
        if (!email || !password) {
            // 如果邮箱或密码为空，就返回 false
            return false;
        }
        // 否则返回 true
        return true;
    };

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

            }}
            noValidate
            autoComplete="off"
        >
            <Head title="注册"></Head>
            {/* header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>} */}
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

                    <Button type='submit' variant="contained"  onClick={handleSubmit}>登录</Button>
                    <Button variant="contained" color="success" >注册</Button>
                </Stack></div>
            {/* </AuthenticatedLayout> */}
        </Box>


    );
}