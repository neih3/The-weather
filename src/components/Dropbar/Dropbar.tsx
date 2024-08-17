import React from "react";
import { DropbarProps } from "../../types/type";

const Dropbar = ({
  data,
  handleClick,
  setOpenDropBar,
  setValueInput,
  valueInput,
  typing,
  setPlaceholder,
}: DropbarProps) => {
  console.log(data?.metadata?.totalCount);
  let totalCount = 0;
  if (data) {
    totalCount = data.metadata?.totalCount;
  }
  if (valueInput === "" && !data) {
    return null;
  } else if (valueInput) {
    if (typing) {
      return (
        <>
          <ContainerDropBar>
            <div>
              <p className="text-sm text-slate-500 py-2">{`đang tìm kiếm '${valueInput}'`}</p>
            </div>
          </ContainerDropBar>
        </>
      );
    }
  }

  return (
    <ContainerDropBar>
      {totalCount > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.data.map((item: any) => (
          <li
            onClick={() => {
              handleClick(item.city);
              setOpenDropBar(false);
              setValueInput(`${item.city}, ${item.countryCode}`);
              setPlaceholder(`${item.city}, ${item.countryCode}`);
            }}
            className="py-2 text-left pl-4 hover:bg-sky-200 cursor-pointer"
            key={item.id}
          >
            <span>{`${item.city}, ${item.countryCode}`}</span>
          </li>
        ))
      ) : (
        <div>
          <p className="text-sm text-slate-500 py-2">{`Không có kết quả cho '${valueInput}'`}</p>
        </div>
      )}
    </ContainerDropBar>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContainerDropBar = ({ children }: any) => (
  <div className="container relative w-full z-1000">
    <ul className="w-full border bg-white mt-2 rounded text-black absolute">
      {children}
    </ul>
  </div>
);

export default React.memo(Dropbar);
