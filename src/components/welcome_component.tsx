export const WelcomeComponent = () => {
    return (
        <>

            <div className="w-screen h-screen bg-zinc-900">
                {/*// Content Div*/}
                <div className="flex flex-col justify-center items-center h-screen ">
                    {/*// Content Div*/}
                    <div className="flex flex-col w-120 h-120 p-12 bg-slate-700 justify-center items-center rounded-xl">
                        {/*// Text Div*/}
                        <div className="text-white text-5xl font-bold font-['Proxima Nova']">Welcome Back</div>
                        <div className="p-2 text-white text-2xl font-normal font-['Proxima Nova']">Enter Your Email to
                            Continue
                        </div>

                        {/*// Input Div*/}
                        <div className="p-8">
                            <input type="text"
                                   placeholder="Email"
                                   className="py-2.5 px-12 rounded border border-white/opacity-50 justify-start items-center inline-flex"
                            >
                            </input>
                        </div>

                        {/*// Button Div*/}

                        <div
                            className="p-4 w-45 h-12 px-5 py-2.5 bg-violet-700 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                            <div
                                className="text-white text-xl font-bold font-['Proxima Nova']"
                            >
                                Get Started
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};
