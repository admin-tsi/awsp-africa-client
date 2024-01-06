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
            <div className="flex flex-col lg:flex-row w-full justify-between items-center">
              <div>
                <p className="text-xl w-1/3">{item.title}</p>
                <p className="text-lg leading-[21px] w-full">
                  {item.secondtitle}
                </p>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="flex justify-end items-center w-full my-2">
                <button className="bg-primary p-3 text-black rounded-lg flex items-center justify-center space-x-2 hover:bg-black hover:text-white group w-[95px] h-[44px]">
                  <span>{index === 0 ? 'Start' : 'Unlock'}</span>{' '}
                  {index === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {index !== content.length - 1 && <hr className="my-5" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetails;
