import {Link} from "react-router-dom";

export const VerificationComponent = () => {
    return (
        <>
            <div className="w-screen h-screen bg-zinc-900">
                {/*content div*/}
                <div className="flex h-screen items-center flex-col justify-center gap-12">
                    <div className="w-120 h-120 bg-slate-800 flex-col justify-start items-center p-8 inline-flex">
                        <div className="text-white text-[50px] font-bold font-['Proxima Nova']">Verification</div>
                        <div className="text-white text-center text-2xl">Enter the 5-digit otp sent to your email to get
                            started.
                        </div>
                        {/*Input Fields*/}
                        <div className="py-16 p-4 flex flex-row gap-6">
                            <input type="text"
                                   placeholder="-"
                                   className="w-11 py-4 px-4 border rounded border-white/opacity-50 bg-slate-800 text-white items-center inline-flex">
                            </input>
                            <input type="text"
                                   placeholder="-"
                                   className="w-11 py-4 px-4 border rounded border-white/opacity-50 bg-slate-800 text-white items-center inline-flex">
                            </input>
                            <input type="text"
                                   placeholder="-"
                                   className="w-11 py-4 px-4 border rounded border-white/opacity-50 bg-slate-800 text-white items-center inline-flex">
                            </input>
                            <input type="text"
                                   placeholder="-"
                                   className="w-11 py-4 px-4 border rounded border-white/opacity-50 bg-slate-800 text-white items-center inline-flex">
                            </input>
                            <input type="text"
                                   placeholder="-"
                                   className="w-11 py-4 px-4 border rounded border-white/opacity-50 bg-slate-800 text-white items-center inline-flex">
                            </input>
                        </div>
                        {/*// Button Div*/}
                        <div
                            className="p-4 w-45 h-12 px-5 py-2.5 bg-violet-700 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                            <div
                                className="text-white text-xl font-bold font-['Proxima Nova']"
                            >
                                <Link to="/home">
                                    Verify
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
