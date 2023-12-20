// components/ModuleDetails.tsx

type ContentItem = {
  id: number;
  title: string;
  secondtitle: string;
  description: string;
};

interface ModuleDetailsProps {
  title: string;
  content: ContentItem[];
}

const ModuleDetails: React.FC<ModuleDetailsProps> = ({ title, content }) => {
  return (
    <div className="container mx-auto w-full text-white p-5">
      <h1 className="text-2xl leading-[28px] w-fit h-fit font-medium ml-7 ">
        {title}
      </h1>

      <div className="text-sm mt-5 border border-solid border-white rounded-lg p-5">
        {content.map((item, index) => (
          <div className="flex flex-col space-y-2 my-3" key={item.id}>
            <p className="text-xl w-1/3">{item.title}</p>
            <p className="text-lg leading-[21px] w-full">{item.secondtitle}</p>
            <p className="text-sm">{item.description}</p>
            {index !== content.length - 1 && <hr className="my-5" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetails;
