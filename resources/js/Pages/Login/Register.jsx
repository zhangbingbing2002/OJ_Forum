import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import backgroundImg from '../../../../public/images/loginpic.jpg';


export default function FormPropsTextFields() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    const [offical_account, setOffical_account] = React.useState('');
    const [phone, setPhone] = React.useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm() ) {
            // 如果表单填写不完整，出警告框
            window.alert('请完整填写表单');
        }else if (!validateEmail(email)) {
            // 如果邮箱格式不正确，就弹出警告框
            window.alert('请输入正确的邮箱格式');
        } else {
            // 如果表单验证通过，就可以执行登录操作
            console.log('登录成功');
        }
    }
    
    const validateForm = () => {
        if (!email || !password || !nickname || !name || !offical_account || !phone) {
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
            <div><center><h1 style={{ fontSize: '2em' }}>注册</h1></center></div>
            <center><div>
                <TextField
                    required
                    id="name"
                    label="真实姓名"
                    autoComplete="off"
                    variant="standard"
                    onChange={(event) => setName(event.target.value)}
                /></div></center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl >
                    <FormLabel required id="demo-row-radio-buttons-group-label">性别</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="女" sx={{ mr: 10 }} />
                        <FormControlLabel value="male" control={<Radio />} label="男" sx={{ mr: 11 }} />
                    </RadioGroup>
                </FormControl></div>
            <center><div><TextField
                required
                id="nickname"
                label="昵称"
                autoComplete="current-password"
                variant="standard"
                onChange={(event) => setNickname(event.target.value)}
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
                <div><TextField
                    required
                    id="phone"
                    label="电话/手机号"
                    type="number"
                    variant="standard"
                    onChange={(event) => setPhone(event.target.value)}
                /></div>
                <div><TextField
                    required
                    id="email"
                    label="邮箱"
                    type="email"
                    variant="standard"
                    onChange={(event) => setEmail(event.target.value)}
                /></div>
                <div><TextField
                    id="offical_account"
                    label="官方帐号名"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={(event) => setOffical_account(event.target.value)}

                /></div></center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} direction="row">
            
                    <Button variant="contained" onClick={handleSubmit} >注册</Button>

                </Stack></div>
        </Box>
    );
}