import brush from "../assets/brush.svg";
import avatar from "../assets/avatar.svg";

export const SidebarComponent = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4', 'Item 4','Item 4', 'Item 4'];
    return (
        <>
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
                    {/*user profile*/}
                    <div className="bg-slate-800 p-4 inline-flex flex-row rounded-[15px] gap-3">
                        {/*<div className="justify-center item-center">*/}
                        <img src={avatar} alt="BigCo Inc. logo"/>
                        <p className="font-bold text-xl font-['Proxima Nova'] text-white">
                            Asim Qamar
                        </p>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
};
