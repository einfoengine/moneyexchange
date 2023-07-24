import Link from "next/link";

type data = {
    text: string,
    href: string
}

interface menuProps {
    title: string,
    data: data[]
}

const Menu:React.FC<menuProps> = ({title, data}) => {
  return (
    <div className="nt-menu nt-component">
        <h4>{title}</h4>
        <ul>
        {
            data.map((item, index)=>{
                return <li key={`nt-menu-${index}`}><Link href={item.href}>{item.text}</Link></li>
            })
        }
        </ul>
    </div>
  )
}

export default Menu