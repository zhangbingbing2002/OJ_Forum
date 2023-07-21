import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const biaoti = {
        fontSize: '20px',
    }
    const xhx = {
        borderBottom: '2px solid gray',
        margin: '0 2px',
    }
    const left = {
        width: '50%',
        height: '200px',
        backgroundColor: 'pink'
    };

    const right = {
        width: '50%',
        height: '200px',
        backgroundColor: ''
    };


    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '-10px',
    };
    const container2 = {
        display: 'flex',
        justifyContent: 'space-between'
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-1" >

                <div style={container2} className="max-w-7xl mx-auto sm:px-4 lg:px-7">
                    <div style={left} className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    </div>
                    <div style={right} className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    </div>
                </div>

            </div>

            <div className="py-1" >
                <div className="max-w-7xl mx-auto sm:px-4 lg:px-7">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div style={container}>
                            <h1 style={biaoti} className="p-5 text-gray-1400" >论坛公告</h1>
                            <a className="p-5 text-gray-500" href="">更多</a>
                        </div>
                        <div style={xhx}></div>
                        <div>
                            <ul className="p-5">
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-1" >
                <div className="max-w-7xl mx-auto sm:px-4 lg:px-7">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div style={container}>
                            <h1 style={biaoti} className="p-5 text-gray-1400" >互助交流</h1>
                            <a className="p-5 text-gray-500" href="">更多</a>
                        </div>
                        <div style={xhx}></div>
                        <div>
                            <ul className="p-5">
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-1" >
                <div className="max-w-7xl mx-auto sm:px-4 lg:px-7">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div style={container}>
                            <h1 style={biaoti} className="p-5 text-gray-1400" >求职信息</h1>
                            <a className="p-5 text-gray-500" href="">更多</a>
                        </div>
                        <div style={xhx}></div>
                        <div>
                            <ul className="p-5">
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
