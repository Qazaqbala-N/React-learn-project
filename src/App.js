import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">


                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>

                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path='/dialogs/' element={<Dialogs dataDialog={props.state.dialogPage.dataDialog} dataMessage = {props.state.dialogPage.dataMessage}/>}/>
                    <Route path='/profile' element={<Profile dataPost = {props.state.profilePage.dataPost}/>}/>
                    </Routes>
                </div>

        </div>
        </BrowserRouter>
);
}

export default App;
