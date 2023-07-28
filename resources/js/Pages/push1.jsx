import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function push1({ auth, mustVerifyEmail, status, className = '' }) {
    const bolg_content = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        publish_user: bolg_content.publish_user,
        content: bolg_content.content,
        theme: bolg_content.theme,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('bolg_push'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">动态</h2>}
        >

            <section className={className}>
                <header>
                    <div className="py-8">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <h2 className="text-lg font-medium text-gray-900">发帖</h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Post whatever you want
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <form onSubmit={submit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="publish_user" value="publish_user" />

                                        <TextInput
                                            id="publish_user"
                                            name="publish_user"
                                            value={data.publish_user}
                                            className="mt-1 block w-full"
                                            autoComplete="publish_user"
                                            isFocused={true}
                                            onChange={(e) => setData('publish_user', e.target.value)}
                                            required
                                        />

                                        <InputError message={errors.publish_user} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="content" value="Content" />

                                        <textarea 
                                        
                                            onChange={(e) => setData('content', e.target.value)}
                                            required 
                                            isFocused={true} 
                                            id="content" 
                                            className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' + " 
                                            rows="8">
                                        
                                        </textarea>

                                        <InputError message={errors.content} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="theme" value="Theme" />

                                        <TextInput
                                            id="theme"
                                            className="mt-1 block w-full"
                                            value={data.theme}
                                            onChange={(e) => setData('theme', e.target.value)}
                                            required
                                            isFocused
                                            autoComplete="theme"
                                        />

                                        <InputError className="mt-2" message={errors.theme} />
                                    </div>


                                    {mustVerifyEmail && (
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

                                    <div className="flex items-center gap-4">
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
