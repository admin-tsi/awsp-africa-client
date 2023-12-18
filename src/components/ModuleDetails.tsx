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

const ModuleDetails: React.FC<ModuleDetailsProps> = ({
  title,
  content,
}) => {
  return (
    <div className="container mx-auto w-full text-white p-5">
      <h1 className="text-2xl leading-[28px] w-fit h-fit font-medium ml-5">
        {title}
      </h1>

      <div className="text-sm mt-2 border border-solid border-white rounded-lg p-8">
        {content.map((item, index) => (
          <div key={item.id}>
            <div className="flex">
              <p className="text-2xl">{item.title}</p>
              <p className="ml-1 text-2xl">{item.secondtitle}</p>
            </div>
            <p className="text-xl">{item.description}</p>
            {index !== content.length - 1 && <hr className="my-5" />}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ModuleDetails;
