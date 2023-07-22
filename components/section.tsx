
const Section = ({ sectionName, children, span, className = '' }: {
  sectionName: string,
  children: React.ReactNode[] | React.ReactNode,
  span: number[],
  className: string
}) => {
  return (
    <section className={`nt-${sectionName} ${className}`}>
      <div className="container mx-auto">
        <div className={`grid grid-cols-12`}>
          {span.map((span, index) => (
            <div key={sectionName + index} className={`hero-a-1 col-span-${span} py-16`}>
              {Array.isArray(children) ? children[index] : children} 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
