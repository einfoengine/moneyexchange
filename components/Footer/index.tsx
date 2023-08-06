import Menu from "../Menu"

const teamMenuProps = [
    {
      text: "Press",
      href: ""
    },
    {
      text: "Affiliates and partnership",
      href: ""
    },
    {
      text: "Modern slavery",
      href: ""
    },
    {
      text: "Investor",
      href: ""
    },
    {
      text: "Mission",
      href: ""
    },
  ]
  const resourceMenuProps = [
    {
      text: "Press",
      href: ""
    },
    {
      text: "Affiliates and partnership",
      href: ""
    },
    {
      text: "Modern slavery",
      href: ""
    },
    {
      text: "Investor",
      href: ""
    },
    {
      text: "Mission",
      href: ""
    },
  ]
  const companyMenuProps = [
    {
      text: "Press",
      href: ""
    },
    {
      text: "Affiliates and partnership",
      href: ""
    },
    {
      text: "Modern slavery",
      href: ""
    },
    {
      text: "Investor",
      href: ""
    },
    {
      text: "Mission",
      href: ""
    },
  ]
  const connectMenuProps = [
    {
      text: "Press",
      href: ""
    },
    {
      text: "Affiliates and partnership",
      href: ""
    },
    {
      text: "Modern slavery",
      href: ""
    },
    {
      text: "Investor",
      href: ""
    },
    {
      text: "Mission",
      href: ""
    },
  ]  

const Footer = () => {
  return(
    <>
        <section className="nt-footer bg-black py-20">
          <div className="container mx-auto">
            <div className="row">
              <div className="grid grid-cols-6">
                <div className="col-span-2">
                  <div className="nt-info">
                    <h2 className="text-lg text-white">Company logo</h2>
                    <p className="text-gray-400">Company introduction message. You need to write a message that will help people to have a general impration about your company.</p>
                    <ul className="text-gray-400">
                      <li>user@domain.com</li>
                      <li>+60123456789</li>
                    </ul>
                  </div>
                </div>
                {/* End col */}
                <div className="col-span-1">
                  <div className="nt-menu">
                    <Menu title='Team' data={teamMenuProps}/>
                  </div>
                </div>
                {/* End col */}
                <div className="col-span-1">
                  <Menu title='Resource' data={resourceMenuProps}/>
                </div>
                {/* End col */}
                <div className="col-span-1">
                  <Menu title='Company' data={companyMenuProps}/>
                </div>
                {/* End col */}
                <div className="col-span-1">
                  <Menu title='Connect' data={connectMenuProps}/>
                </div>
                {/* End col */}
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 text-white text-center py-4">
          <p className="text-sm">
            All Rights Reserved 2022-2023 @ VibelyDigital
          </p>
        </footer>
    </>
  )
}

export default Footer;