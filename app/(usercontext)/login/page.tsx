import Section from "@/components/section";
import Login from "@/components/Login";

const LoginPage = () => {
    const path = '/api/users/user/login';
    return(        
        <main>
            <Section sectionName="registration" className="nt-registration" span={[12]}>
                <div className="pt-24">
                    <Login path={path}/>
                </div>
            </Section>
        </main>
    );
}
export default LoginPage