export const SplashComponent = () => {
    return (
        <div className="w-screen h-screen bg-zinc-900">
            {/*// Content Div*/}
            <div className="text-center flex flex-col justify-center h-screen items-center">
                {/*/Text Div/*/}
                <div className="p-2 text-white text-7xl font-bold font-['Proxima Nova']">
                    QissaMusik
                </div>
                <div className="text-white text-4xl font-normal font-['Proxima Nova']">Your Intelligent Music
                    Assistant
                </div>


                {/*// Button Div*/}
                <div className="p-12 gap-4 inline-flex">
                    <div
                        className="w-40 h-12 px-5 py-2.5 bg-violet-700 rounded-3xl justify-center items-center">
                        <div className="text-white text-xl font-bold font-['Proxima Nova'] ">Login</div>
                    </div>

                    <div
                        className=" w-40 h-12 px-5 py-2.5 bg-violet-700 rounded-3xl justify-center items-center">
                        <div className="text-white text-xl font-bold font-['Proxima Nova']">Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
