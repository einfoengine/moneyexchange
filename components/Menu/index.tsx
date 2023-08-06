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
        <h4 className="text-lg text-white">{title}</h4>
        <ul className="text-gray-500">
        {
            data.map((item, index)=>{
                return <li className="hover:text-white" key={`nt-menu-${index}`}><Link href={item.href}>{item.text}</Link></li>
            })
        }
        </ul>
    </div>
  )
}

export default Menu