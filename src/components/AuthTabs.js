import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { LoginModal } from './LoginModal';
import { SignupModal } from './SignupModal';
import './AuthTabs.css'
import { Add } from "@material-ui/icons";


function AuthTabs({ handleLoginModalState }) {
    return (
        <div className="tabs">
            <Tabs>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                    <div onClick={handleLoginModalState} className="cross__container react-tabs__tab">
                        <div className="cross">
                            <Add />
                        </div>
                    </div>
                </TabList>

                <TabPanel>
                    <LoginModal handleLoginModalState={handleLoginModalState}/>
                </TabPanel>
                <TabPanel>
                    <SignupModal handleLoginModalState={handleLoginModalState}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default AuthTabs
