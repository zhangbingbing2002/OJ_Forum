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
import { fontGrid } from '@mui/material/styles/cssUtils';

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
            <div><center><h1 style={{ fontSize: '2em' }}>注册</h1></center></div>
            <center><div>
                <TextField
                    required
                    id="standard-required"
                    label="真实姓名"
                    defaultValue=""
                    autoComplete="off"
                    variant="standard"
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
                id="standard-password-input"
                label="昵称"
                autoComplete="current-password"
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
                <div><TextField
                    required
                    id="standard-number"
                    label="电话/手机号"
                    type="number"
                    variant="standard"
                /></div>
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
                    label="官方帐号名"
                    autoComplete="current-password"
                    variant="standard"
                /></div></center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} direction="row">
            
                    <Button variant="contained">注册</Button>

                </Stack></div>
            {/* </AuthenticatedLayout> */}
        </Box>


    );
}