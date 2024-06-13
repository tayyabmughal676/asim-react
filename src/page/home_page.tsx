// import brush from '../assets/brush.svg'
// import avatar from '../assets/avatar.svg'
import icon_happy from '../assets/icon_happy.svg'
import icon_sad from '../assets/icon_sad.svg'
import icon_romantic from '../assets/icon_romantic.svg'
import icon_send from '../assets/icon_send.svg'
import {SidebarComponent} from "../components/sidebar.tsx";
export const HomePage = () => {
    return (
        <>
            {/*main div*/}
                <div className="h-screen w-screen bg-zinc-900">
                    <div className="inline-flex">
                        <SidebarComponent/>
                        {/*text area*/}
                        <div className="w-[1280px] inline-flex flex-col-8 gap-[60px] items-center justify-center bg-zinc-800">
                            {/*Heading and Paragraph*/}
                            <div className="flex-1 p-5 overflow-y-auto space-y-12">
                                <h1 className="text-white font-bold text-[50px] font-['Proxima Nova'] text-center">
                                    How you are feeling today?
                                </h1>
                                <p className="text-white font-normal text-2xl font-['Proxima Nova'] text-center">
                                    We will generate lyrics for you based on your mood
                                </p>
                                {/*icons div*/}
                                <div className="flex flex-col items-center h-full justify-between space-y-12">
                                {/*div 1*/}
                                <div className="inline-flex gap-[30px] items-center justify-center">
                                    <div
                                        className="w-[100px] h-[100px] hover:bg-gray-800 inline-flex px-6 py-6 rounded-[10px] gap-3 border-zinc-500 border-2 flex-col justify-center items-center">
                                        <img src={icon_happy} alt="Happy"/>
                                        <div className="text-white">
                                            Happy
                                        </div>
                                    </div>
                                    <div
                                        className="w-[100px] h-[100px] inline-flex px-6 py-6 hover:bg-gray-800 rounded-[10px] gap-3 border-zinc-500 border-2 flex-col justify-center items-center">
                                        <img src={icon_sad} alt="Sad"/>
                                        <div className="text-white">
                                            Sad
                                        </div>
                                    </div>
                                    <div
                                        className="w-[100px] h-[100px] inline-flex px-6 py-6 hover:bg-gray-800 active:bg-blue-600 rounded-[10px] gap-3 border-zinc-500 border-2 flex-col justify-center items-center">
                                        <img src={icon_romantic} alt="Romantic"/>
                                        <div className="text-white">
                                            Romantic
                                        </div>
                                    </div>
                                </div>
                                {/*    Text Field*/}
                                <div className="inline-flex flex-row space-x-4 mt-6 w-full">
                                    <input type="text"
                                           className="flex-grow px-4 py-4 bg-gray-800 rounded-[10px]"
                                           placeholder="Or write your own query here and get automated lyrics...">
                                    </input>
                                    <button className="w-[70px] h-[70px] relative flex bg-violet-700 rounded-[10px] items-center justify-center">
                                        <img src={icon_send} alt="Send"/>
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
