import brush from '../assets/brush.svg'

export const HomeComponent = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4','Item 4', 'Item 4'];
    return (
        <>
            {/*main div*/}
                <div className="h-screen bg-zinc-900">
                    <div className="flex-row inline-flex">
                        {/*sidebar*/}
                        <div className="w-64 h-screen flex flex-col-4 bg-slate-700 p-4">
                            <div className="flex-col justify-between items-start flex">
                                <div className="gap-10 justify-start items-center">
                                    <div className="inline-flex flex-row justify-between gap-10">
                                        <h4 className="text-white font-bold text-[18px] font-['Proxima Nova']">
                                            Previous Queries
                                        </h4>
                                        <img src={brush} alt="BigCo Inc. logo"/>
                                    </div>
                                    {items.map(
                                        (item, index) => (
                                            <li key={index}>{item}</li>
                                        )
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                        {/*text area*/}
                        <div className="flex-col-8 inline-flex items-center justify-center bg-zinc-900 w-screen">
                            {/*Heading and Paragraph*/}
                            <div className="flex-1 p-5 overflow-y-auto gap-3">
                                <h1 className="text-white font-bold text-2xl font-['Proxima Nova'] text-center">
                                    How you are feeling today?
                                </h1>
                                <p className="text-white font-bold text-2xl font-['Proxima Nova'] text-center">
                                    We will generate lyrics for you based on your mood
                                </p>
                            </div>
                            {/*Icons div*/}
                            {/*    <div className="items-center gap-7.5 justify-center">*/}
                            {/*        <div className="px-6 py-[25px] rounded-[10px] border border-zinc-500 flex-col gap-3 items-center inline-flex">*/}
                            {/*            <div className="w-6 h-6 relative">*/}

                            {/*            </div>*/}
                            {/*            <p className="text-black font-normal font-['Proxima Nova'] text-center">*/}
                            {/*                Happy*/}
                            {/*            </p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                        </div>
                    </div>
                </div>
        </>
    );
};
