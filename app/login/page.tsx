import Client from "../client-template";
import Section from "@/components/section";

import Login from "@/components/Login";
import LoginLayout from "./login.layout";

const LoginPage = () => {
    const path = '/api/users/user/login';
    return(
        // <Page>
            <Client>
                <main>
                <Section sectionName="registration" className="nt-registration" span={[12]}>
                    <div className="pt-24">
                        <Login path={path}/>
                    </div>
                </Section>
                </main>
            </Client>
        // </Page>
    );
}
export default LoginPage