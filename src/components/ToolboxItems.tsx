import TechIcon from "@/components/TechIcon";

const ToolboxItems = ({
  items,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  return (
    <div className="flex p-6 pt-0 md:px-10 md:pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-0.5 gap-3 md:gap-4 xl:gap-6 w-full">
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="text-sm md:text-base font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
