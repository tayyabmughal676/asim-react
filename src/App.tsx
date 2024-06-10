// import {WelcomeComponent} from "./components/welcome_component.tsx";

import {HomeComponent} from "./components/home_component.tsx";

function App() {

    return (

        // Main Div
        <div className="w-screen h-screen bg-zinc-900">
            {/*<SplashComponent/>*/}
            {/*<WelcomeComponent/>*/}
            {/*{<VerificationComponent/>}*/}
            {<HomeComponent/>}
            <>
                <h1 className="text-xl font-bold text-white font-light underline text-center space-y-4"> This is my Masters Thesis Website</h1>
            </>
        </div>
    )
}

export default App
