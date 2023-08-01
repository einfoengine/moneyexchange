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
        <section className="nt-footer">
          <div className="container mx-auto">
            <div className="row">
              <div className="grid grid-cols-6">
                <div className="col-span-2">
                  <h2>Company logo</h2>
                  <p>Company introduction message. You need to write a message that will help people to have a general impration about your company.</p>
                  <ul>
                    <li>user@domain.com</li>
                    <li>+60123456789</li>
                  </ul>
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
    </>
  )
}

export default Footer;