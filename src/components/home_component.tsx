// import brush from '../assets/brush.svg'
// import avatar from '../assets/avatar.svg'
import icon_happy from '../assets/icon_happy.svg'
import icon_sad from '../assets/icon_sad.svg'
import icon_romantic from '../assets/icon_romantic.svg'
import icon_send from '../assets/icon_send.svg'
import {SidebarComponent} from "./sidebar.tsx";
export const HomeComponent = () => {
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4','Item 4', 'Item 4'];
    return (
        <>
            {/*main div*/}
                <div className="h-screen bg-zinc-900">
                    <div className="flex-row inline-flex">
                        <SidebarComponent/>
                        {/*/!*sidebar*!/*/}
                        {/*<div className="w-64 h-screen flex flex-col-4 bg-slate-700 p-4">*/}
                        {/*    <div className="flex-col justify-between items-start flex">*/}
                        {/*        <div className="gap-10 justify-start items-center">*/}
                        {/*            <div className="inline-flex flex-row justify-between gap-10">*/}
                        {/*                <h4 className="text-white font-bold text-[18px] font-['Proxima Nova']">*/}
                        {/*                    Previous Queries*/}
                        {/*                </h4>*/}
                        {/*                <img src={brush} alt="BigCo Inc. logo"/>*/}
                        {/*            </div>*/}
                        {/*            {items.map(*/}
                        {/*                (item, index) => (*/}
                        {/*                    <li key={index}>{item}</li>*/}
                        {/*                )*/}
                        {/*            )*/}
                        {/*            }*/}
                        {/*        </div>*/}
                        {/*        /!*user profile*!/*/}
                        {/*        <div className="bg-slate-800 p-4 inline-flex flex-row rounded-[15px] gap-3">*/}
                        {/*            /!*<div className="justify-center item-center">*!/*/}
                        {/*            <img src={avatar} alt="BigCo Inc. logo"/>*/}
                        {/*            <p className="font-bold text-xl font-['Proxima Nova'] text-white">*/}
                        {/*                Asim Qamar*/}
                        {/*            </p>*/}
                        {/*            /!*</div>*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*text area*/}
                        <div className="flex-col-8 inline-flex items-center justify-center bg-zinc-900">
                            {/*Heading and Paragraph*/}
                            <div className="flex-1 p-5 overflow-y-auto gap-3">
                                <h1 className="text-white font-bold text-2xl font-['Proxima Nova'] text-center">
                                    How you are feeling today?
                                </h1>
                                <p className="text-white font-bold text-2xl font-['Proxima Nova'] text-center">
                                    We will generate lyrics for you based on your mood
                                </p>
                                {/*icons div*/}
                                <div className="flex flex-col items-center h-full justify-between space-y-6">
                                {/*div 1*/}
                                <div className="inline-flex gap-[30px] items-center justify-center">
                                    <div
                                        className="w-[100px] h-[100px] inline-flex px-6 py-6 rounded-[10px] gap-3 border-zinc-500 border-2 flex-col justify-center items-center">
                                        <img src={icon_happy} alt="BigCo Inc. logo"/>
                                        <div className="text-white">
                                            Happy
                                        </div>
                                    </div>
                                    <div
                                        className="w-[100px] h-[100px] inline-flex px-6 py-6 rounded-[10px] gap-3 border-zinc-500 border-2 flex-col justify-center items-center">
                                        <img src={icon_sad} alt="BigCo Inc. logo"/>
                                        <div className="text-white">
                                            Sad
                                        </div>
                                    </div>
                                    <div
                                        className="w-[100px] h-[100px] inline-flex px-6 py-6 rounded-[10px] gap-3 border-zinc-500 border-2 flex-col justify-center items-center">
                                        <img src={icon_romantic} alt="BigCo Inc. logo"/>
                                        <div className="text-white">
                                            Romantic
                                        </div>
                                    </div>
                                </div>
                                {/*    Text Field*/}
                                <div className="inline-flex flex-row space-x-4 mt-6 w-full">
                                    <input type="text" className="flex-grow px-4 py-4 bg-gray-800 rounded-[10px]">
                                    </input>
                                    <button className="w-[70px] h-[70px] relative flex bg-violet-700 rounded-[10px] items-center justify-center">
                                        <img src={icon_send} alt="BigCo Inc. logo"/>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};
