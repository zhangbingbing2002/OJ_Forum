import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        sex: user.sex,
        phone: user.phone,
        blog_number: user.blog_number,
    });
    console.log(data)
    const submit = (e) => {
        setTimeout(() => {
            setOpen(false)
          }, 2000); // 2 秒后自动关闭对话框

        e.preventDefault();
        console.log(data)
   
        patch(route('profile.update'));
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        event.preventDefault(); 
        setOpen(false);
    };

    return (

        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.  
                </p>
            </header>

           
            <div className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        readOnly={true}
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                        readOnly={true}
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="sex" value="Sex" />

                    <TextInput
                        id="sex"
                        className="mt-1 block w-full"
                        value={data.sex || ''}
                        onChange={(e) => setData('sex', e.target.value)}
                        required
                        autoComplete="username"
                        readOnly={true}
                    />

                    <InputError className="mt-2" message={errors.sex} />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.phone || ''}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                        autoComplete="username"
                        readOnly={true}
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>

                <div>
                    <InputLabel htmlFor="blog_number" value="博客数量" />

                    <TextInput
                        id="blog_number"
                        className="mt-1 block w-full"
                        value={data.blog_number || '0'}
                        autoComplete="username"
                        readOnly={true}
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>


                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                {/* <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div> */}
            </div>
            <div>
                <Button  variant="outlined" onClick={handleClickOpen} style={{marginTop:'20px'}}>
                    修改个人信息
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>个人信息</DialogTitle>
                    
                    <form onSubmit={submit} className="mt-6 space-y-6" style={{margin:'0 50px'}}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                            />

                            <InputError className="mt-2" message={errors.email} />
                        </div>

                        <div>
                            <InputLabel htmlFor="sex" value="Sex" />

                            <TextInput
                                id="sex"
                                className="mt-1 block w-full"
                                value={data.sex || ''}
                                onChange={(e) => setData('sex', e.target.value)}
                                required
                                autoComplete="username"
                            />

                            <InputError className="mt-2" message={errors.sex} />
                        </div>

                        <div>
                            <InputLabel htmlFor="phone" value="Phone" />

                            <TextInput
                                id="phone"
                                type="tel"
                                className="mt-1 block w-full"
                                value={data.phone || ''}
                                onChange={(e) => setData('phone', e.target.value)}
                                required
                                autoComplete="username"
                            />

                            <InputError className="mt-2" message={errors.phone} />
                        </div>
                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2 text-gray-800">
                                    Your email address is unverified.
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Click here to re-send the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 font-medium text-sm text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}
                        <DialogActions>
                        <div className="flex items-center gap-4">
                            <PrimaryButton  disabled={processing}>Save</PrimaryButton>

                            <Transition 
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">Saved.</p>
                            </Transition>
                            <PrimaryButton onClick={handleClose} >取消</PrimaryButton>
                        </div>      
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </section>
    );
}
