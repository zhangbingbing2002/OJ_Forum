import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <div>
            <Head title="首页" />
            <div>

                <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                    
                    

                    <div>
                        <Link
                            href={route('login')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

