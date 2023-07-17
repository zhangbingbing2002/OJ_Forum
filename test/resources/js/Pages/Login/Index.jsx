import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// const handleClick = () => {
//     inertia.visit(route('Login.Register'));
//   }


export default function FormPropsTextFields() {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },

            }}
            noValidate
            autoComplete="off"
        >
            {/* <AuthenticatedLayout> */}
            <Head title="注册"></Head>
            {/* header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>} */}
            <div><center><h1 style={{ fontSize: '2em' }}>登录</h1></center></div>
            <center>
                <div><TextField
                    required
                    id="standard-search"
                    label="邮箱"
                    type="email"
                    variant="standard"
                /></div>
                <div><TextField
                    required
                    id="standard-password-input"
                    label="密码"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                /></div>
            </center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} direction="row">

                    <Button variant="contained">登录</Button>
                    <Button variant="contained" color="success" >注册</Button>
                </Stack></div>
            {/* </AuthenticatedLayout> */}
        </Box>


    );
}