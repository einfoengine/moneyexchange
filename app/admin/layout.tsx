export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <div className="nt-admin">
            {children}
        </div>
    )
}
