import RegistrationForm from "@/components/RegistrationForm";
import Client from "../client-template";
import Section from "@/components/section";

const Register = () => {
    return(
        <Client>
            <main className="pt-28">
            <Section sectionName="registration" className="nt-registration" span={[12]}>
                <RegistrationForm/>
            </Section>
            </main>
        </Client>
    );
}

export default Register;