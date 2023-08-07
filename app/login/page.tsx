import Client from "../client-template";
import Section from "@/components/section";

import Login from "@/components/Login";

const LoginPage = () => {
    const path = '/api/user/login';
    return(
        <Client>
            <main>
            <Section sectionName="registration" className="nt-registration" span={[12]}>
                <div className="pt-24">
                    <Login path={path}/>
                </div>
            </Section>
            </main>
        </Client>
    );
}
export default LoginPage